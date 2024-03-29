export default (sequelize, DataType, ...t) => {
    return sequelize.define('Obras', {
        id: {
            type: DataType.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        pedido: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        dataLancamento: {
            type: DataType.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        dataInicio: {
            type: DataType.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        dataFinal: {
            type: DataType.DATE,
            allowNull: true,
            validate: {
                notEmpty: false
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
