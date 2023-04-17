"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post_service extends Model {
    static associate(models) {}
  }
  post_service.init(
    {
      id_service: {
        type: DataTypes.INTEGER,
        references: { model: "service", key: "id" },
      },
      id_post: {
        type: DataTypes.INTEGER,
        references: { model: "post", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "post_service",
      name: {},
    }
  );
  return post_service;
};
