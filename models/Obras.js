import app from '../app'

export default (sequelize, DataType, ...t) => {
    const Obras = sequelize.define('Obras', {
        id: {
            type: DataType.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        dataInicio: {
            type: DataType.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        observacao: {
            type: DataType.TEXT,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        }
    })
    return Obras
}