const conexao = require('../infraestrutura/conexao')
const naverTable = 'id, name, birthdate, admission_date, job_role'

class Projects {

    adiciona(project, res) {
        const sql = 'INSERT INTO Projects SET ?'

        conexao.query(sql, project, (erro, resultados) => {

            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
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

    show(id, res) {
        const sql = `SELECT * FROM Projects WHERE id=${id}`
        
        conexao.query(sql, (erro, resultados1) => {
           
            const projectName = (resultados1[0].name)
            const sql2 = `SELECT ${naverTable} FROM Navers WHERE project_name='${projectName}'`
            conexao.query(sql2, (erro, resultados2) => {
                const resultadoFinal = resultados1.map((result) => {
                    return {...result, navers: resultados2}
                })
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(200).json(resultadoFinal)
                }
            })         
        })
    }
}

module.exports = new Projects