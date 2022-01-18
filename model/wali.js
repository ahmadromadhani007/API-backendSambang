module.exports = (sequelize, DataTypes) => {
  const wali = sequelize.define(
    "wali",
    {
      nik: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      no_mahrom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nama_wali: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "wali",
    }
  );
  wali.associate = function (model) {
    wali.belongsTo(model.reservasi, { foreignKey: "no_mahrom" });
    wali.belongsTo(model.reservasi_wali, { foreignKey: "id" });
  };
  return wali;
};
