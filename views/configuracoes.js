import ConfiguracoesController from '../controllers/configuracoes'

export default (app) => {
    const configuracoesController = new ConfiguracoesController(app.datasource.models.Configuracoes)
    app.route('/configuracoes/')
        .get((req, res) => {
            configuracoesController.getById(1)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .post((req, res) => {
            configuracoesController.create(req.body)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .put((req, res) => {
            configuracoesController.update(req.body, { id: 1})
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .delete((req, res) => {
            configuracoesController.delete({ id: 1 })
                .then(result => {
                    res.sendStatus(result.statusCode)
                })
        })
}