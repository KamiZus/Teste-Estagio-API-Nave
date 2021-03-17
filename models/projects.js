const conexao = require('../infraestrutura/conexao')

class Projects {

    async adiciona(project, res) {

        const { navers, ...projects } = project;

        return new Promise((resolve, rejected) => {
          conexao.query(`INSERT INTO Projects SET?`, projects, (erro, resultados) => {
            if (erro) throw new Error(erro);
            resolve(resultados);
          })
        })
    }

    async lista(res) {
        
        return new Promise((resolve, rejected) => {
            conexao.query('SELECT * FROM Projects', (erro, resultados) => {
                if(erro) throw new Error(erro)
                resolve(resultados)   
            })         
        })
    }

    async buscaPorId(id, res) {
        return new Promise((resolve, rejected) => {
            conexao.query(`SELECT * FROM Projects WHERE id = ?`, id, (erro, resultados) => {
                if(erro) throw new Error(erro)
                resolve(resultados)
            }) 
        })        
    }

    async verificaProjeto(id){
        return new Promise((resolve, rejected) => {
            conexao.query(`SELECT * FROM Projects WHERE id = ?`,id, (erro, resultados) => {
                if (erro) throw new Error(erro);
                resolve(resultados);
            });
        });
    }
}

module.exports = new Projects