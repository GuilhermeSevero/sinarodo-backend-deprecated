import HttpStatus from 'http-status'
import { defaultResponse, errorResponse } from '../config/responses'

class ControllerBase {
    constructor(Model) {
        this.Model = Model
    }

    getAll(where = {}) {
        return this.Model.findAll({ where })
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message))
    }

    getById(params) {
        return this.Model.findOne({ where: params })
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message))
    }

    create(data) {
        data.id = 1 // só pode existir um
        return this.Model.create(data)
            .then(result => defaultResponse(result, HttpStatus.CREATED))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY))
    }

    update(data, params) {
        return this.Model.update(data, { where: params })
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY))
    }

    delete(params) {
        return this.Model.destroy({ where: params })
            .then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY))
    }
}

export default ControllerBase