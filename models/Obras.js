export default (sequelize, DataType, ...t) => {
    return sequelize.define('Obras', {
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
}
