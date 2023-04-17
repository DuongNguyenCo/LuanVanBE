"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class receipt extends Model {
    static associate(models) {
      receipt.belongsTo(models.business, {
        foreignKey: "id_business",
      });
      receipt.belongsTo(models.service, {
        foreignKey: "id_service",
      });
      receipt.belongsTo(models.discount, {
        foreignKey: "id_discount",
      });
    }
  }
  receipt.init(
    {
      id_discount: DataTypes.INTEGER,
      id_service: DataTypes.INTEGER,
      id_business: DataTypes.INTEGER,
      name: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "receipt",
    }
  );
  return receipt;
};
