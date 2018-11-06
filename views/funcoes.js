import setDefaultRoutes from '../classes/Routes'
import FuncoesController from '../controllers/funcoes'

export default (app) => {
    const funcoesController = new FuncoesController(app.datasource.models.Funcoes)

    setDefaultRoutes(app, funcoesController, 'funcoes')
}