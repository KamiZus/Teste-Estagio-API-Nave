const Navers = require('../models/navers')
const Projects = require('../models/projects')

module.exports = app => {
    
    app.get('/navers', (req, res) => {
        Navers.lista(res)
    })

    app.get('/navers/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Navers.show(id, res)
    })

    app.post('/navers', (req, res) => {
        const navers = req.body

        Navers.adiciona(navers, res)
    })

    
}