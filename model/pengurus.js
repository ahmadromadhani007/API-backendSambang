module.exports = (sequelize, DataTypes) => {
    const pengurus = sequelize.define('pengurus', {
        id_pengurus  : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nama_pengurus:{
            type: DataTypes.STRING,
            allowNull: false
        },
        jenkel:{
            type: DataTypes.ENUM('laki-laki', 'perempuan'),
            allowNull: false
        },

        id_wilayah:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status:{
            type: DataTypes.ENUM('santri', 'santriwati'),
            allowNull: false
        },
    }, {
        tableName: 'pengurus'
    })
    return pengurus;
};