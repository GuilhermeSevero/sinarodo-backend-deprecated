import crypto from 'crypto'

export default (sequelize, DataType) => {
    return sequelize.define('Aplicativos', {
        id: {
            type: DataType.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        app: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    },
    {
        hooks: {
            beforeCreate: aplicativo => {
                aplicativo.set('password', crypto.createHash('md5').update(aplicativo.password).digest("hex"))
            }
        }
    })
}