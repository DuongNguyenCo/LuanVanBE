"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class language extends Model {
    static associate(models) {
      language.belongsToMany(models.job, {
        through: models.job_language,
        foreignKey: "id_language",
      });
    }
  }
  language.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "language",
    }
  );
  return language;
};
