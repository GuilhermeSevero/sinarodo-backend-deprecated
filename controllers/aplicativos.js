import ControllerBase from './controllerBase'
import { defaultResponse, errorResponse } from '../config/responses'

class AplicativosController extends ControllerBase {
    getByApp(app) {
        return this.Aplicativos.findOne({ where: { app } })
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message))
    }
}

export default AplicativosController