const conexao = require('../infraestrutura/conexao')
const naverTable = 'id, name, birthdate, admission_date, job_role'

class Navers {
    
    adiciona(naver, res) {
        const sql = 'INSERT INTO Navers SET ?'
        
        conexao.query(sql, naver, (erro, resultados) => {
            
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
    
    lista(res) {
        const sql = `SELECT ${naverTable} FROM Navers`

        conexao.query(sql, (erro, resultados) => {
            
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    show(id, res) {
        const sql = `SELECT ${naverTable} FROM Navers WHERE id=${id}`
        
        conexao.query(sql, (erro, resultados) => {
            
            const sql2 = `SELECT project_name FROM Navers WHERE id=${id}`
            conexao.query(sql2, (erro, resultados1) => {
                const projectName = (resultados1[0].project_name)
                
                const sqlProject = `SELECT * FROM Projects WHERE name='${projectName}'`
                conexao.query(sqlProject, (erro, resultados2) => {
                    
                    const resultadoFinal = resultados.map((result) => {
                        return {...result, projects: resultados2}
                    })
                    if(erro) {
                        res.status(400).json(erro)
                    } else {
                        res.status(200).json(resultadoFinal)
                    }
                })
            })
        })
    }
}

module.exports = new Navers