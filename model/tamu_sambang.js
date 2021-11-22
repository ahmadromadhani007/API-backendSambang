module.exports = (sequelize, DataTypes) => {
    const tamu_sambang = sequelize.define('tamu_sambang', {
        id_tamu  : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_sambang_santri :{ //foreignKey
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_mahrom :{
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'tb_tamu_sambang'
    })
    return tamu_sambang;
};
  
