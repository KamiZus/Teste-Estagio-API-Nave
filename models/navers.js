const conexao = require('../infraestrutura/conexao')

class Navers {
    
    async adiciona(naver, res) {

        return new Promise((resolve, rejected) => {
            conexao.query(`INSERT INTO Navers SET?`, naver, (erro, resultados) => {
                if (erro) throw new Error(erro);
                resolve(resultados);
          })
        })
    }  

    async lista(res) {
        
        return new Promise((resolve, rejected) => {
            conexao.query(`SELECT * FROM Navers`, (erro, resultados) => {
                if(erro) throw new Error(erro)
                resolve(resultados)   
            })
        })
    }

    async buscaPorId(id, res) {
        return new Promise((resolve, rejected) => {
            conexao.query(`SELECT * FROM Navers WHERE id = ?`, id, (erro, resultados) => {
                if(erro) throw new Error(erro)
                resolve(resultados)
            }) 
        })
    }

    async verificaNaver(id){
        return new Promise((resolve, rejected) => {
            conexao.query(`SELECT * FROM Navers WHERE id = ?`,id, (erro, resultados) => {
                if (erro) throw new Error(erro);
                resolve(resultados);
            });
        });
    }
}

module.exports = new Navers