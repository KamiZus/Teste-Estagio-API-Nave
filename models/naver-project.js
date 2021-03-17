const conexao = require("../infraestrutura/conexao");

class NaverProject {

  async adiciona(naverProject) {
    return new Promise((resolve, rejected) => {
      conexao.query(`INSERT INTO LinkPN SET?`, naverProject, (erro, resultados) => {
        if (erro) throw new Error(erro)
        resolve(resultados)
      })
    })
  }

  async buscaPN(id, source1, source2) {
    return new Promise((resolve, rejected) => {
      conexao.query(`SELECT DISTINCT ${source1} FROM LinkPN WHERE ${source2} = ?`, id, (erro, resultados) => {
      if (erro) throw new Error(erro)
      resolve(resultados)
      })
    })
  }
  
}

module.exports = new NaverProject();
