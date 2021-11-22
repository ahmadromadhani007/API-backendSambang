module.exports = (sequelize, DataTypes) => {
    const setting_hari = sequelize.define('setting_hari', {
        id_set_hari  : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_wilayah:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_shif :{ //foreignKey
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nama_hari:{
            type: DataTypes.STRING,
            allowNull: false
        },
        status_hari:{
            type: DataTypes.ENUM('p', 'i'),
            allowNull: false
        },
        status:{
            type: DataTypes.ENUM('y', 't'),
            allowNull: false
        },
    }, {
        tableName: 'tb_setting_hari'
    })
    return setting_hari;
};