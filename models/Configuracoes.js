export default (sequelize, DataType) => {
    return sequelize.define('Configuracoes', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        valorPorPonto: {
            type: DataType.DECIMAL(15, 2),
            allowNull: false,
            defaultValue: 1.00,
            validate: {
                notEmpty: false
            }
        },
        acrescimoEncarregado: {
            type: DataType.DECIMAL(15, 2),
            allowNull: false,
            defaultValue: 10.00,
            validate: {
                notEmpty: false
            }
        }
    })
}