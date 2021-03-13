const conexao = require('../infraestrutura/conexao')

class Projects {

    adiciona(project, res) {

        const sql = 'INSERT INTO Projects SET ?'
        const realProject = {...project}
        delete realProject.navers

        const naversId = project.navers.split('-').map(Number)

        conexao.query(sql, realProject, (erro, resultados) => {

            if(erro) {
                res.status(400).json(erro)
            } else {
                if(project.navers != 0) {
                    res.status(200).json({...realProject, navers: naversId})
                } else {
                    res.status(200).json(realProject)
                }
                
            }
            if(project.navers != 0) {
        
                const sqlSearch = `SELECT id FROM Projects WHERE name='${project.name}'`
                    conexao.query(sqlSearch, (erro, id) => {
                    const idProject = (id[0].id)
                    
                    const sqlLink = 'INSERT INTO LinkPN SET ?'
                    for(var i = 0; i < naversId.length; i++) {      
                        const insert = {id_naver: naversId[i], id_project: idProject}
                        console.log(insert)
                        
                        conexao.query(sqlLink, insert, (erro, resultado) => {
                            if(erro) {
                                res.status(400).json(erro)
                            }
                        })
                    }
                })            
            }
        })
    }

    lista(res) {
        const sql = 'SELECT * FROM Projects'

        conexao.query(sql, (erro, resultados) => {
            
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        
    }
}

module.exports = new Projects