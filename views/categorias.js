import CategoriasController from '../controllers/categorias'

export default (app) => {
    const categoriasController = new CategoriasController(app.datasource.models.Categorias)
    app.route('/categorias')
        .get((req, res) => {
            categoriasController.getAll(req.query)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .post((req, res) => {
            categoriasController.create(req.body)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
    app.route('/categorias/:id')
        .get((req, res) => {
            categoriasController.getById(req.params)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .put((req, res) => {
            categoriasController.update(req.body, req.params)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .delete((req, res) => {
            categoriasController.delete(req.params)
                .then(result => {
                    res.sendStatus(result.statusCode)
                })
        })
}