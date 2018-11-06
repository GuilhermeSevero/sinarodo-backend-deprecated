import setDefaultRoutes from '../classes/Routes'
import ObrasUsuariosController from '../controllers/obrasUsuarios'

export default (app) => {
    const obrasUsuariosController = new ObrasUsuariosController(app.datasource.models.ObrasUsuario)

    setDefaultRoutes(app, obrasUsuariosController, 'obrasUsuarios')
}