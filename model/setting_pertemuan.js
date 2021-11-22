module.exports = (sequelize, DataTypes) => {
    const setting_pertemuan = sequelize.define('setting_pertemuan', {
        id_pertemuan : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        jml_pertemuan:{
            type: DataTypes.STRING,
            allowNull: false
        },
        jml_tamu:{
            type: DataTypes.STRING,
            allowNull: false
        },
        alokasi_waktu:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        tableName: 'tb_setting_pertemuan'
    })
    return setting_pertemuan;
};