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

    models.Obras.belongsTo(models.Usuarios, { foreignKey: 'supervisor' })

    models.Usuarios.belongsTo(models.Funcoes, { foreignKey: 'funcao1' })
    models.Usuarios.belongsTo(models.Funcoes, { foreignKey: 'funcao2' })

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
        sequelize.sync().done(() => database)
    }
    return database
}
