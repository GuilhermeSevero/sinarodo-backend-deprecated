import Sequelize from 'sequelize'
import path from 'path'
import fs from 'fs'

let database = null;
const loadModels = (sequelize) => {
    const dir = path.join(__dirname, '../models')
    let models = []
    fs.readdirSync(dir).forEach(file => {
        const model = sequelize.import(path.join(dir, file))
        models[model.name] = model
    })
    return models
}

const setForeignKeys = (models) => {
    models.Usuarios.belongsTo(models.Funcoes, { foreignKey: 'funcao1' })
    models.Usuarios.belongsTo(models.Funcoes, { foreignKey: 'funcao2' })

    models.ObrasUsuarios.belongsTo(models.Usuarios, {foreignKey: 'idUsuario'  })
    models.ObrasUsuarios.belongsTo(models.Obras, { foreignKey: 'idObra' })
    
    models.Premiacoes.belongsTo(models.Categorias, { foreignKey: 'idCategoria' })
    models.Premiacoes.belongsTo(models.ObrasUsuarios, { foreignKey: 'idObraUsuario' })

    return models
}

export default (app) => {
    if (!database) {
        const config = app.config
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        )
        database = {
            sequelize,
            Sequelize,
            models: []
        }

        database.models = loadModels(sequelize)
        database.models = setForeignKeys(database.models)

        sequelize.sync().done(() => database)
    }
    return database
}
