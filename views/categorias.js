import setDefaultRoutes from '../classes/Routes'
import CategoriasController from '../controllers/categorias'

export default (app) => {
    const categoriasController = new CategoriasController(app.datasource.models.Categorias)
    
    setDefaultRoutes(app, categoriasController, 'categorias')
}