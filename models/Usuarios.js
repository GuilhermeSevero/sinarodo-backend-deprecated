import crypto from 'crypto'

export default (sequelize, DataType) => {
    return sequelize.define('Usuarios', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataType.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        },
        login: {
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
        },
        cpf: {
            type: DataType.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            }
        }
    },
    {
        hooks: {
            beforeCreate: user => {
                user.set('password', crypto.createHash('md5').update(user.password).digest("hex"))
            }
        }
    })
}