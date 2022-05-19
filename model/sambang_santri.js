module.exports = (sequelize, DataTypes) => {
    const sambang_santri = sequelize.define('sambang_santri', {
        id_sambang_santri  : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        no_reservasi:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_mahrom:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_set_hari :{ //foreign
            type: DataTypes.INTEGER,
            allowNull: false    
        },
        tgl_daftar_sambang:{
            type: DataTypes.DATE,
            allowNull: false
        },
        tgl_sambang:{
            type: DataTypes.DATE,
            allowNull: false
        },
        status_hadir:{
            type: DataTypes.ENUM('y', 't'),
            allowNull: false
        },
        jam_mulai:{
            type: DataTypes.STRING,
            allowNull: false
        },
        jam_akhir:{
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'tb_sambang_santri'
    })
    return sambang_santri;
};