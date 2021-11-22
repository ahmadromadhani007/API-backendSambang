module.exports = (sequelize, DataTypes) => {
    const wali_santri = sequelize.define('wali_santri', {
        id_wali_santri  : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nama_wali_santri:{
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
            type: DataTypes.ENUM('ayah', 'ibu'),
            allowNull: false
        },
    }, {
        tableName: 'wali_santri'
    })
    return wali_santri;
};