import crypto from 'crypto'

export default (sequelize, DataType) => {
    return sequelize.define('Usuarios', {
        id: {
            type: DataType.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            set(val) {
              this.setDataValue('nome', val.toUpperCase());
            }
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
        },
        permissao: {
            type: DataType.INTEGER,
            allowNull: false,
            defaultValue: 3,
            validate: {
                notEmpty: false,
                isIn:{
                    args: [[1, 2, 3]],
                    msg: 'Informe: 1-Admin; 2-Gerente; 3-Usuário'
                }
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