import FuncoesController from '../controllers/funcoes'

export default (app) => {
    const funcoesController = new FuncoesController(app.datasource.models.Funcoes)
    app.route('/funcoes')
        .get((req, res) => {
            funcoesController.getAll(req.query)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .post((req, res) => {
            funcoesController.create(req.body)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
    app.route('/funcoes/:id')
        .get((req, res) => {
            funcoesController.getById(req.params)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .put((req, res) => {
            funcoesController.update(req.body, req.params)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .delete((req, res) => {
            funcoesController.delete(req.params)
                .then(result => {
                    res.sendStatus(result.statusCode)
                })
        })
}