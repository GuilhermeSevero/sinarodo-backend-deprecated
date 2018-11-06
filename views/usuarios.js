import HttpStatus from 'http-status'
import setDefaultRoutes from '../classes/Routes'
import UsuariosController from '../controllers/Usuarios'

export default (app) => {
    const usuariosController = new UsuariosController(app.datasource.models.Usuarios)
    setDefaultRoutes(app, usuariosController, 'usuarios')

    app.route('/usuarios/autenticar')
        .post((req, res) => {
            if (req.body.login && req.body.password) {
                usuariosController.autenticarUsuario(req.body)
                .then(result => {
                    res.status(result.statusCode)
                    res.json(result.data)
                })
            } else {
                res.sendStatus(HttpStatus.BAD_REQUEST)
            }
        })
}