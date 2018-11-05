import ControllerBase from './controllerBase'

class ConfiguracoesController extends ControllerBase {
    create(data) {
        data.id = 1 // só pode existir um
        return this.Model.create(data)
            .then(result => defaultResponse(result, HttpStatus.CREATED))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY))
    }
}

export default ConfiguracoesController