import HttpStatus from 'http-status'
import jwt from 'jwt-simple'
import crypto from 'crypto'
import AplicativosController from '../controllers/aplicativos'

export default app => {
    const config = app.config
    const aplicativosController = new AplicativosController(app.datasource.models.Aplicativos)

    app.post('/token', (req, res) => {
        if(req.body.app && req.body.password) {
            const app = req.body.app
            const password = req.body.password
            aplicativosController.getByApp(app)
                .then(({ data }) => {
                    if(data.password === crypto.createHash('md5').update(password).digest("hex")) {
                        res.json({
                            token: jwt.encode({ id: data.id }, config.jwtSecret)
                        })
                    } else {
                        res.sendStatus(HttpStatus.UNAUTHORIZED)
                    }
                })
                .catch(error => {
                    console.log(error)
                    res.sendStatus(HttpStatus.UNAUTHORIZED)
                })
        } else {
            res.sendStatus(HttpStatus.UNAUTHORIZED)
        }
    })
    app.post('/aplicativos', (req, res) => {
        aplicativosController.create(req.body)
            .then(result => {
                res.status(result.statusCode)
                res.json(result.data)
            })
    })
}