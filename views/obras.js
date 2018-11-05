import ObrasController from '../controllers/obras'

export default (app) => {
    const obrasController = new ObrasController(app.datasource.models.Obras)
    app.route('/obras')
        .get((req, res) => {
            obrasController.getAll(req.query)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .post((req, res) => {
            obrasController.create(req.body)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
    app.route('/obras/:id')
        .get((req, res) => {
            obrasController.getById(req.params)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .put((req, res) => {
            obrasController.update(req.body, req.params)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .delete((req, res) => {
            obrasController.delete(req.params)
                .then(result => {
                    res.sendStatus(result.statusCode)
                })
        })
}