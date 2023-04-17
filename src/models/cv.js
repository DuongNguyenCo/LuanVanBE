"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cv extends Model {
    static associate(models) {
      cv.belongsTo(models.candidate, {
        foreignKey: "id_candidate",
      });
      cv.belongsToMany(models.post, {
        through: models.cv_post,
        foreignKey: "id_cv",
      });
    }
  }
  cv.init(
    {
      id_candidate: DataTypes.INTEGER,
      file: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "cv",
    }
  );
  return cv;
};
