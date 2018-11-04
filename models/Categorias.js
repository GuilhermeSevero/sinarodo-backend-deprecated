export default (sequelize, DataType) => {
    return sequelize.define('Categorias', {
        id: {
            type: DataType.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        peso: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 100,
                min: 0, 
            }
        }
    })
}