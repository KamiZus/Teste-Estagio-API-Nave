const conexao = require('../infraestrutura/conexao')

class Navers {
    
    adiciona(naver, res) {

        const sql = 'INSERT INTO Navers SET ?'
        const realNaver = {...naver}
        delete realNaver.projects
        
        const projectsId = naver.projects.split('-').map(Number)
        
        conexao.query(sql, realNaver, (erro, resultados) => {
            
            if(erro) {
                res.status(400).json(erro)
            } else {
                if(naver.projects != 0) {
                    res.status(200).json({...realNaver, projects: projectsId})
                } else {
                    res.status(200).json(realNaver)
                }
            }
        })

        if(naver.projects != 0) {
        
            const sqlSearch = `SELECT id FROM Navers WHERE name='${naver.name}'`
                conexao.query(sqlSearch, (erro, id) => {
                const idNaver = (id[0].id)
                
                const sqlLink = 'INSERT INTO LinkPN SET ?'
                for(var i = 0; i < projectsId.length; i++) {      
                    const insert = {id_naver: idNaver, id_project: projectsId[i]}
                    console.log(insert)
                    
                    conexao.query(sqlLink, insert, (erro, resultado) => {
                        if(erro) {
                            res.status(400).json(erro)
                        }
                    })
                }
            })            
        }
    }
    
    lista(res) {
        const sql = `SELECT * FROM Navers`

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

module.exports = new Navers