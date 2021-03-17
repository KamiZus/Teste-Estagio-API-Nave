const Projects = require('../models/projects')
const Navers = require('../models/navers')
const NaverProject = require('../models/naver-project')

module.exports = app => {

    app.get('/projetos/index', async (req, res) => {
        try{
            const lista = await Projects.lista(res)
            return res.status(200).json(lista)

        }catch(err) {
            return res.status(500).json({err: err.internal ? 'Internal server error' : err.message})
        }
    })

    app.get('/projetos/show/:id', async (req, res) => {
        try{
            const id = parseInt(req.params.id)
            
            const project = await Projects.buscaPorId(id, res)

            const naversId = await NaverProject.buscaPN(project[0].id, "id_naver", "id_project")
            
            const navers = []
            for(var i = 0; i < naversId.length; i++) {
                const naver = await Navers.verificaNaver(naversId[i].id_naver)
                navers.push(naver[0])
            }

            if(!naversId.length) {
                return res.json({...project[0], navers: `There's no Naver participating in this project`})
            } else {
                return res.json({...project[0], navers: navers})
            }

        }catch(err) {
            return res.status(500).json({err: err.internal ? 'Internal server error' : err.message})
        }
    })

    app.post('/projetos/store', async (req, res) => {
        try{
            const {navers,...projects} = req.body
            
            const project = await Projects.adiciona(projects, res)

            if(navers.length){
                await Promise.all(navers.map(async nav => {
                    const [verifyNavers] =  await Navers.verificaNaver(nav)
                    if(!verifyNavers){
                        return res.status(400).json({
                            err: `The Naver ID: ${nav} has not exists`
                        })
                    }
                    await NaverProject.adiciona({id_naver:verifyNavers.id,id_project:project.insertId})
                }))
            }

            if(!project){
                return res.status(400).json({err:"Verify your payload and try again"})
            }
            return res.json({ id: project.insertId,...projects})
            
        }catch(err){
            return res.status(500).json({err: err.internal ? 'Internal server error' : err.message})
        }
    })
}