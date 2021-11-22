module.exports = (sequelize, DataTypes) => {
    const shif = sequelize.define('shif', {
        id_shif   : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nama_shif:{
            type: DataTypes.STRING,
            allowNull: false
        },
        jam_awal:{
            type: DataTypes.TIME,
            allowNull: false
        },
        jam_akhir:{
            type: DataTypes.TIME,
            allowNull: false
        },
        jml_santri:{
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type: DataTypes.ENUM('y', 't'),
            allowNull: false
        },
    }, {
        tableName: 'tb_shif'
    })
    return shif;
};