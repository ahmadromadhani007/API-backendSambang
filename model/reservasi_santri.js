module.exports = (sequelize, DataTypes) => {
  const reservasi_santri = sequelize.define(
    "reservasi_santri",
    {
      id_reservasi: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "reservasi",
          key: "id",
        },
        field: "id_reservasi",
      },
      id_santri: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "wali",
          key: "id",
        },
        field: "id_santri",
      },
    },
    {
      tableName: "reservasi_santri",
    }
  );
  reservasi_santri.associate = function (model) {
    reservasi_santri.hasOne(model.wali, {
      foreignKey: "id",
      sourceKey: "id_santri",
    });
    reservasi_santri.hasOne(model.santri, {
      foreignKey: "id",
      sourceKey: "id_santri",
    });
    reservasi_santri.belongsTo(model.reservasi, { foreignKey: "id_reservasi" });
  };
  return reservasi_santri;
};
