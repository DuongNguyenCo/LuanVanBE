"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class email_tamplates extends Model {
    static associate(models) {}
  }
  email_tamplates.init(
    {
      id_business: DataTypes.STRING,
      name: DataTypes.STRING,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "email_tamplates",
    }
  );
  return email_tamplates;
};
