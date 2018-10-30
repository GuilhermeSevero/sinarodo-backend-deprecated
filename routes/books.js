import BooksController from '../controllers/books'

export default (app) => {
    const booksController = new BooksController(app.datasource.models.Books)
    app.route('/books')
        // .all(app.auth.authenticate())
        .get((req, res) => {
            booksController.getAll()
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .post((req, res) => {
            booksController.create(req.body)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
    app.route('/:id')
        // .all(app.auth.authenticate())
        .get((req, res) => {
            booksController.getById(req.params)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .put((req, res) => {
            booksController.update(req.body, req.params)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
        })
        .delete((req, res) => {
            booksController.delete(req.params)
                .then(result => {
                    res.sendStatus(result.statusCode)
                })
        })
}