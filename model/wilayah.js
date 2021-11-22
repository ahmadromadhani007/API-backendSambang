module.exports = (sequelize, DataTypes) => {
    const wilayah = sequelize.define('wilayah', {
        id_wilayah  : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nama_wilayah:{
            type: DataTypes.STRING,
            allowNull: false
        },
        id_santri:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status:{
            type: DataTypes.ENUM('pusat', 'satelite'),
            allowNull: false
        },
    }, {
        tableName: 'wilayah'
    })
    return wilayah;
};