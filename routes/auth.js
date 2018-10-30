import HttpStatus from 'http-status'
import jwt from 'jwt-simple'
import crypto from 'crypto'

export default app => {
    const config = app.config
    const Usuarios = app.datasource.models.Usuarios

    app.post('/token', (req, res) => {
        if(req.body.login && req.body.password) {
            const login = req.body.login
            const password = req.body.password
            Usuarios.findOne({ where: { login } })
                .then(user => {
                    if(user.password === crypto.createHash('md5').update(password).digest("hex")) {
                        res.json({
                            token: jwt.encode({ id: user.id }, config.jwtSecret)
                        })
                    }
                })
                .catch(error => {
                    console.log(error)
                    res.sendStatus(HttpStatus.UNAUTHORIZED)
                })
        } else {
            res.sendStatus(httpStatus.UNAUTHORIZED)
        }
    })
}