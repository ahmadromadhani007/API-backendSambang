module.exports = (sequelize, DataTypes) => {
  const hari = sequelize.define(
    "hari",
    {
      nama_hari: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_wilayah: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "wilayah",
          key: "id",
        },
      },
      id_shift: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "shift",
          key: "id",
        },
        field: "id_shift",
      },
      status_hari: {
        type: DataTypes.ENUM("p", "l"),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("y", "t"),
        allowNull: false,
      },
      kapasitas: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "hari",
    }
  );
  hari.associate = function (models) {
    hari.hasOne(models.wilayah, {
      foreignKey: "id",
      sourceKey: "id_wilayah",
    });
    hari.hasOne(models.shift, {
      foreignKey: "id",
      sourceKey: "id_shift",
    });
    hari.belongsTo(models.reservasi, { foreignKey: "id" });
  };
  return hari;
};
