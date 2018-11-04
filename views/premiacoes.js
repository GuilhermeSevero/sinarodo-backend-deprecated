import PremiacoesController from '../controllers/premiacoes'

export default (app) => {
    const premiacoesController = new PremiacoesController(app.datasource.models.Premiacoes)
    app.route('/premiacoes')
        .all(app.auth.authenticate())
        .get((req, res) => {
            premiacoesController.getAll(req.query)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .post((req, res) => {
            premiacoesController.create(req.body)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
    app.route('/premiacoes/:id')
        .all(app.auth.authenticate())
        .get((req, res) => {
            premiacoesController.getById(req.params)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .put((req, res) => {
            premiacoesController.update(req.body, req.params)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .delete((req, res) => {
            premiacoesController.delete(req.params)
                .then(result => {
                    res.sendStatus(result.statusCode)
                })
        })
}