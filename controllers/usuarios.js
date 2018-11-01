import HttpStatus from 'http-status'
import { defaultResponse, errorResponse } from '../config/responses'

class UsuariosController {
    constructor(Usuarios) {
        this.Usuarios = Usuarios
    }

    getAll(query) {
        return this.Usuarios.findAll({ where: query })
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message))
    }

    getById(params) {
        return this.Usuarios.findOne({ where: params })
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message))
    }

    create(data) {
        return this.Usuarios.create(data)
            .then(result => defaultResponse(result, HttpStatus.CREATED))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY))
    }

    update(data, params) {
        return this.Usuarios.update(data, { where: params })
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY))
    }

    delete(params) {
        return this.Usuarios.destroy({ where: params })
            .then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY))
    }
}

export default UsuariosController