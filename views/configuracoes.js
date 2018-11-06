import setDefaultRoutes from '../classes/Routes'
import ConfiguracoesController from '../controllers/configuracoes'

export default (app) => {
    const configuracoesController = new ConfiguracoesController(app.datasource.models.Configuracoes)

    setDefaultRoutes(app, configuracoesController, 'configuracoes')
}