module.exports = (sequelize, DataTypes) => {
  const reservasi_wali = sequelize.define(
    "reservasi_wali",
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
      id_wali: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "wali",
          key: "id",
        },
        field: "id_wali",
      },
    },
    {
      tableName: "reservasi_wali",
    }
  );
  reservasi_wali.associate = function (model) {
    reservasi_wali.hasOne(model.wali, {
      foreignKey: "id",
      sourceKey: "id_wali",
    });
    reservasi_wali.belongsTo(model.reservasi, { foreignKey: "id_reservasi" });
  };
  return reservasi_wali;
};
