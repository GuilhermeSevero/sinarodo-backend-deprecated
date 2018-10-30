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
                notEmpty: false,
                isEmail: true
            },
            unique: true
        },
        login: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            unique: true
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
                notEmpty: false,
                isNumeric: { msg: 'Digite apenas os números do CPF' }
            },
            unique: true
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