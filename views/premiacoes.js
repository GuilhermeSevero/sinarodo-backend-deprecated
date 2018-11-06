import setDefaultRoutes from '../classes/Routes'
import PremiacoesController from '../controllers/premiacoes'

export default (app) => {
    const premiacoesController = new PremiacoesController(app.datasource.models.Premiacoes)
    
    setDefaultRoutes(app, premiacoesController, 'premiacoes')
}