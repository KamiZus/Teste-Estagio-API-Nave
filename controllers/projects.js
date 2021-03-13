const Projects = require('../models/projects')
const Navers = require('../models/navers')


module.exports = app => {
    app.get('/projetos/index', (req, res) => {
        Projects.lista(res)
    })

    app.get('/projetos/show/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Projects.buscaPorId(id, res)
    })

    app.post('/projetos/store', (req, res) => {
        const projects = req.body

        Projects.adiciona(projects, res)
    })
}