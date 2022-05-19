module.exports = (sequelize, DataTypes) => {
  const reservasi = sequelize.define(
    "reservasi",
    {
      no_mahrom: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_hari: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "hari",
          key: "id",
        },
        field: "id_hari",
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
      tgl_reservasi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tgl_kunjungan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jam_mula: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      jam_final: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      hadir: {
        type: DataTypes.ENUM("Santri", "Santriwati"),
        allowNull: false,
      },
    },
    {
      tableName: "reservasi",
    }
  );
  reservasi.associate = function (models) {
    reservasi.hasOne(models.hari, {
      foreignKey: "id",
      sourceKey: "id_hari",
    });
    reservasi.hasOne(models.shift, {
      foreignKey: "id",
      sourceKey: "id_shift",
    });
    reservasi.hasMany(models.reservasi_wali, {
      foreignKey: "id_reservasi",
      sourceKey: "id",
    });
    reservasi.hasMany(models.reservasi_santri, {
      foreignKey: "id_reservasi",
      sourceKey: "id",
    });
  };
  return reservasi;
};
