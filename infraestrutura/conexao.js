const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3334,
    user: 'root',
    password: 'admin',
    database: 'teste-estagio-navers'
})

module.exports = conexao