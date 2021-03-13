const Navers = require('../models/navers')
const Projects = require('../models/projects')

module.exports = app => {
    
    app.get('/navers/index', (req, res) => {
        Navers.lista(res)
    })

    app.get('/navers/show/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Navers.buscaPorId(id, res)
    })

    app.post('/navers/store', (req, res) => {
        const navers = req.body

        Navers.adiciona(navers, res)
    })

    
}