module.exports = (sequelize, DataTypes) => {
  const wilayah = sequelize.define(
    "wilayah",
    {
      nama_wilayah: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "wilayah",
    }
  );
  wilayah.associate = function (model) {
    wilayah.belongsTo(model.hari, {
      foreignKey: "id",
    });
    wilayah.belongsTo(model.santri, { foreignKey: "id" });
  };
  return wilayah;
};
