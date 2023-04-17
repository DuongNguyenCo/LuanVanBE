"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class discount extends Model {
    static associate(models) {
      discount.hasMany(models.receipt, {});
    }
  }
  discount.init(
    {
      name: DataTypes.STRING,
      code: DataTypes.STRING(6),
    },
    {
      sequelize,
      modelName: "discount",
    }
  );
  return discount;
};
