module.exports = (sequelize, DataTypes) => {
  const lembaga = sequelize.define(
    "lembaga",
    {
      nama_lembaga: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "lembaga",
    }
  );
  lembaga.associate = function (model) {
    lembaga.belongsTo(model.santri, { foreignKey: "id" });
  };
  return lembaga;
};
