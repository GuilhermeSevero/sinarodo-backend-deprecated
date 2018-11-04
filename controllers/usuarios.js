import crypto from 'crypto'
import ControllerBase from './controllerBase'
import { defaultResponse, errorResponse } from '../config/responses'

class UsuariosController extends ControllerBase {
    autenticarUsuarios({ login, password }) {
        password = crypto.createHash('md5').update(password).digest("hex")

        return this.Model.findOne({ where: { login, password } })
            .then(result => defaultResponse(result))
            .catch(error => errorResponse('login ou senha incorretos'))
    }
}

export default UsuariosController