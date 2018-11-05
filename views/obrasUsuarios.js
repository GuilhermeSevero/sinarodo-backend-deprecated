import ObrasUsuariosController from '../controllers/obrasUsuarios'

export default (app) => {
    const obrasUsuariosController = new ObrasUsuariosController(app.datasource.models.ObrasUsuario)
    app.route('/obrasUsuarios')
        .get((req, res) => {
            obrasUsuariosController.getAll(req.query)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .post((req, res) => {
            obrasUsuariosController.create(req.body)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
    app.route('/obrasUsuarios/:id')
        .get((req, res) => {
            obrasUsuariosController.getById(req.params)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .put((req, res) => {
            obrasUsuariosController.update(req.body, req.params)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .delete((req, res) => {
            obrasUsuariosController.delete(req.params)
                .then(result => {
                    res.sendStatus(result.statusCode)
                })
        })
}