export default (sequelize, DataType) => {
    return sequelize.define('ObrasUsuarios', {
        id: {
            type: DataType.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        notaFinal: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        observacoes: {
            type: DataType.TEXT,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        }
    })
}