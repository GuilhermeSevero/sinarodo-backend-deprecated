import UsersController from '../controllers/users'

export default (app) => {
    const usersController = new UsersController(app.datasource.models.Users)
    app.route('/usuarios')
        // .all(app.auth.authenticate())
        .get((req, res) => {
            usersController.getAll()
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .post((req, res) => {
            usersController.create(req.body)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
    app.route('/usuarios/:id')
        // .all(app.auth.authenticate())
        .get((req, res) => {
            usersController.getById(req.params)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .put((req, res) => {
            usersController.update(req.body, req.params)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .delete((req, res) => {
            usersController.delete(req.params)
                .then(result => {
                    res.sendStatus(result.statusCode)
                })
        })
}