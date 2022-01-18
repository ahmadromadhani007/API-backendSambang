module.exports = (sequelize, DataTypes) => {
  const shift = sequelize.define(
    "shift",
    {
      nama_shift: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jam_awal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jam_akhir: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jml_santri: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("Aktif", "Nonaktif"),
        allowNull: false,
      },
    },
    {
      tableName: "shift",
    }
  );
  shift.associate = function (model) {
    shift.belongsTo(model.hari, { foreignKey: "id" });
  };
  return shift;
};
