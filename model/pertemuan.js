module.exports = (sequelize, DataTypes) => {
  const pertemuan = sequelize.define(
    "pertemuan",
    {
      batas_sambang: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      batas_tamu: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      waktu: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "pertemuan",
    }
  );
  return pertemuan;
};
