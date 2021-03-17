const Navers = require('../models/navers')
const Projects = require('../models/projects')
const NaverProject = require('../models/naver-project')

module.exports = app => {
    
    app.get('/navers/index', async (req, res) => {
        try{
            const lista = await Navers.lista(res)
            return res.status(200).json(lista)

        }catch(err) {
            return res.status(500).json({err: err.internal ? 'Internal server error' : err.message})
        }
    })

    app.get('/navers/show/:id', async (req, res) => {
        try{
            const id = parseInt(req.params.id)

            const naver = await Navers.buscaPorId(id, res)
            const projectsId = await NaverProject.buscaPN(naver[0].id, "id_project", "id_naver")

            const projects = []
            for(var i = 0; i < projectsId.length; i++) {
                const project = await Projects.verificaProjeto(projectsId[i].id_project)
                projects.push(project[0])
            }

            if(!projectsId.length) {
                return res.json({...naver[0], projects: `This Naver doesn't participate in any project`})
            } else {
                return res.json({...naver[0], projects: projects})
            }

        }catch(err){
            return res.status(500).json({err: err.internal ? 'Internal server error' : err.message})
        }
    })

    app.post('/navers/store', async (req, res) => {
        try{
            const {projects,...navers} = req.body
            
            const naver = await Navers.adiciona(navers, res)
            
            if(projects.length){
                
                await Promise.all(projects.map(async proj => {
                    const [verifyProject] =  await Projects.verificaProjeto(proj)
                    
                    if(!verifyProject){
                        return res.status(400).json({
                            err: `The project ID: ${proj} has not exists`
                        })
                        
                    }
                    await NaverProject.adiciona({id_naver:naver.insertId,id_project:verifyProject.id})
                    
                }))
            }
            
            if(!naver){
                return res.status(400).json({err:"Verify your payload and try again"})
            }
            return res.json({id: naver.insertId,...navers})
            
        }catch(err){
            return res.status(500).json({err: err.internal ? 'Internal server error' : err.message})
        }
    })

    
}