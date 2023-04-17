"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cv_post extends Model {
    static associate(models) {}
  }
  cv_post.init(
    {
      id_post: {
        type: DataTypes.INTEGER,
        references: { model: "post", key: "id" },
      },
      id_cv: {
        type: DataTypes.INTEGER,
        references: { model: "cv", key: "id" },
      },
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "cv_post",
    }
  );
  return cv_post;
};
