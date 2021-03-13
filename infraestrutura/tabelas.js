class Tabelas {
    init(conexao) {
        this.conexao = conexao
        
        this.criarNavers()
        this.criarProjects()
    }

    criarNavers() {
        const sql = `CREATE TABLE IF NOT EXISTS Navers (id int NOT NULL AUTO_INCREMENT, 
            name varchar(50) NOT NULL, 
            birthdate date NOT NULL, 
            admission_date date NOT NULL, 
            job_role varchar(20) NOT NULL,
            project_name numeric, 
            PRIMARY KEY(id))`

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Navers criada com sucesso')
            }
        })
    }

    criarProjects() {
        const sql = `CREATE TABLE IF NOT EXISTS Projects (id int NOT NULL AUTO_INCREMENT, 
            name varchar(50) NOT NULL, 
            PRIMARY KEY(id))`

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Projects criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas