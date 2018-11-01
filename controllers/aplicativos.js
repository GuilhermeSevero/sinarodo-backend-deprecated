import HttpStatus from 'http-status'
import { defaultResponse, errorResponse } from '../config/responses'

class AplicativosController {
    constructor(Aplicativos) {
        this.Aplicativos = Aplicativos
    }

    getAll() {
        return this.Aplicativos.findAll({})
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message))
    }

    getByApp(app) {
        return this.Aplicativos.findOne({ where: { app } })
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message))
    }

    create(data) {
        return this.Aplicativos.create(data)
            .then(result => defaultResponse(result, HttpStatus.CREATED))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY))
    }
}

export default AplicativosController