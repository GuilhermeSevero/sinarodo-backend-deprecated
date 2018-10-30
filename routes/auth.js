import HttpStatus from 'http-status'
import jwt from 'jwt-simple'

export default app => {
    const config = app.config
    const Users = app.datasource.models.Users

    app.post('/token', (req, res) => {
        if(req.body.email && req.body.password) {
            const email = req.body.email
            const password = req.body.email
            Users.findOne({ where: { email }})
                .then(user => {
                    if(Users.isPassword(user.password, password)) {
                        res.json({
                            token: jwt.encode({ id: user.id }, config.jwtSecret)
                        })
                    }
                })
                .catch(() => res.sendStatus(HttpStatus.UNAUTHORIZED))
        } else {
            res.sendStatus(httpStatus.UNAUTHORIZED)
        }
    })
}