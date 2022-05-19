module.exports = (sequelize, DataTypes) => {
  const santri = sequelize.define(
    "santri",
    {
      no_mahrom: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jenkel: {
        type: DataTypes.ENUM("Laki -Laki", "Perempuan"),
        allowNull: false,
      },
      id_wilayah: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "wilayah",
          key: "id",
        },
        field: "id_wilayah",
      },
      id_lembaga: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "lembaga",
          key: "id",
        },
        field: "id_lembaga",
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status_santri: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("Santri", "Santriwati"),
        allowNull: false,
      },
      keterangan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "santri",
    }
  );
  santri.associate = function (models) {
    santri.hasOne(models.wilayah, {
      foreignKey: "id",
      sourceKey: "id_wilayah",
    });
    santri.hasOne(models.lembaga, {
      foreignKey: "id",
      sourceKey: "id_lembaga",
    });
    santri.belongsTo(models.reservasi, { foreignKey: "no_mahrom" });
    santri.belongsTo(models.reservasi_wali, { foreignKey: "id" });
  };
  return santri;
};
