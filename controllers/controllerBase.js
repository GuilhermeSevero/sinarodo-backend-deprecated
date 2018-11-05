import HttpStatus from 'http-status'
import { defaultResponse, errorResponse } from '../config/responses'

const getParametros = (parametros) => {
    let page = 1
    let perPage = 25
    let sort = 'id'
    let direction = 'ASC'
    if (parametros.hasOwnProperty('page')) {
        page = Number(parametros.page)
        delete parametros.page
    }
    if (parametros.hasOwnProperty('perPage')) {
        perPage = Number(parametros.perPage)
        delete parametros.perPage
    }
    if (parametros.hasOwnProperty('sort')) {
        direction = parametros.sort.endsWith('-') ? 'DESC' : 'ASC'
        sort = parametros.sort.replace('+', '').replace('-', '')
        delete parametros.sort
    }

    return { page, perPage, sort, direction }
}

class ControllerBase {
    constructor(Model) {
        this.Model = Model
    }

    getAll(where = {}) {
        let { page, perPage, sort, direction } = getParametros(where)

        return this.Model.findAll({
            where,
            offset: (page * perPage) - perPage,
            limit: perPage,
            order: [[sort, direction]]
        })
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message))
    }

    getById(params) {
        return this.Model.findOne({ where: params })
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message))
    }

    create(data) {
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