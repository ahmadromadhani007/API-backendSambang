module.exports = (sequelize, DataTypes) => {
    const santri = sequelize.define('santri', {
        id_santri  : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nama_santri:{
            type: DataTypes.STRING,
            allowNull: false
        },
        jenkel:{
            type: DataTypes.ENUM('laki-laki', 'perempuan'),
            allowNull: false
        },
        alamat:{
            type: DataTypes.STRING,
            allowNull: false
        },
        nik:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status:{
            type: DataTypes.ENUM('putra', 'putri'),
            allowNull: false
        },
    }, {
        tableName: 'santri'
    })
    return santri;
};