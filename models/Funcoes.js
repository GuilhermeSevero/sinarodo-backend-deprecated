export default (sequelize, DataType) => {
    return sequelize.define('Funcoes', {
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
            },
            set(val) {
              this.setDataValue('nome', val.toUpperCase());
            }
        }
    })
}
