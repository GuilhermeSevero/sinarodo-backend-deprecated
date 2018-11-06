import setDefaultRoutes from '../classes/Routes'
import ObrasController from '../controllers/obras'

export default (app) => {
    const obrasController = new ObrasController(app.datasource.models.Obras)

    setDefaultRoutes(app, obrasController, 'obras')
}