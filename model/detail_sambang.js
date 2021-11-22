module.exports = (sequelize, DataTypes) => {
    const detail_sambang = sequelize.define('detail_sambang', {
        id_detail_sambang : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_sambang_santri :{ //foreignKey
            type: DataTypes.INTEGER,
            allowNull: false
        },
        niup :{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status_santri :{
            type: DataTypes.ENUM('a', 'p', 'i'),
            allowNull: false
        },
        Keterangan :{
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'tb_detail_sambang'
    })
    return detail_sambang;
};