const Projects = require('../models/projects')
const Navers = require('../models/navers')

module.exports = app => {
    app.get('/projects', (req, res) => {
        Projects.lista(res)
    })

    app.get('/projects/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Projects.show(id, res)
    })

    app.post('/projects', (req, res) => {
        const projects = req.body

        Projects.adiciona(projects, res)
    })
}