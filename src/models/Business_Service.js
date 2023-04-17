"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class business_service extends Model {
    static associate(models) {}
  }
  business_service.init(
    {
      id_service: {
        type: DataTypes.INTEGER,
        references: { model: "service", key: "id" },
      },
      id_business: {
        type: DataTypes.INTEGER,
        references: { model: "business", key: "id" },
      },
      expire: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "business_service",
      name: {},
    }
  );
  return business_service;
};
