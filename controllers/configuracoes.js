import HttpStatus from 'http-status'
import { defaultResponse, errorResponse } from '../config/responses'

class ConfiguracoesController {
    constructor(Configuracoes) {
        this.Configuracoes = Configuracoes
    }

    getAll() {
        return this.Configuracoes.findAll({})
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message))
    }

    getById(params) {
        return this.Configuracoes.findOne({ where: params })
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message))
    }

    create(data) {
        return this.Configuracoes.create(data)
            .then(result => defaultResponse(result, HttpStatus.CREATED))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY))
    }

    update(data, params) {
        return this.Configuracoes.update(data, { where: params })
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY))
    }

    delete(params) {
        return this.Configuracoes.destroy({ where: params })
            .then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY))
    }
}

export default ConfiguracoesController