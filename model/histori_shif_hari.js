module.exports = (sequelize, DataTypes) => {
    const histori_shif_hari = sequelize.define('histori_shif_hari', {
        id_shif_hari: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_set_hari:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_shif:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status:{
            type: DataTypes.ENUM('ya', 'tidak'),
            allowNull: false
        },
    }, {
        tableName: 'histori_shif_hari'
    })
    return histori_shif_hari;
};