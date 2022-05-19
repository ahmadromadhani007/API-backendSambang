module.exports = (sequelize, DataTypes) => {
  const informasi = sequelize.define(
    "informasi",
    {
      nama_informasi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      detail_informasi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tanggal_mulai: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tanggal_akhir: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("Buka", "Tutup"),
        allowNull: false,
      },
    },
    {
      tableName: "informasi",
    }
  );
  return informasi;
};
