"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class business extends Model {
    static associate(models) {
      business.hasMany(models.post, {
        foreignKey: "id_business",
      });
      business.hasMany(models.receipt, {
        as: "receipt",
      });
      business.hasMany(models.address, {
        foreignKey: "id_business",
      });
      business.belongsToMany(models.candidate, {
        through: models.candi_busi,
        foreignKey: "id_business",
      });
      business.belongsToMany(models.service, {
        through: models.business_service,
        foreignKey: "id_business",
      });
      // business.belongsTo(models.Service, { foreignKey: "id_service" });
    }
  }
  business.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING(10),
      email: DataTypes.STRING,
      des: DataTypes.TEXT,
      benefit: DataTypes.TEXT,
      url: DataTypes.TEXT,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "business",
    }
  );
  return business;
};
