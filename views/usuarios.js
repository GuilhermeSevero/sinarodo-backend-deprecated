import UsuariosController from '../controllers/Usuarios'

export default (app) => {
    const usuariosController = new UsuariosController(app.datasource.models.Usuarios)
    app.route('/usuarios')
        .all(app.auth.authenticate())
        .get((req, res) => {
            usuariosController.getAll(req.query)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .post((req, res) => {
            usuariosController.create(req.body)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
    app.route('/usuarios/:id')
        .all(app.auth.authenticate())
        .get((req, res) => {
            usuariosController.getById(req.params)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .put((req, res) => {
            usuariosController.update(req.body, req.params)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .delete((req, res) => {
            usuariosController.delete(req.params)
                .then(result => {
                    res.sendStatus(result.statusCode)
                })
        })
}