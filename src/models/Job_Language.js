"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class job_language extends Model {
    static associate(models) {}
  }
  job_language.init(
    {
      id_job: {
        type: DataTypes.INTEGER,
        references: { model: "job", key: "id" },
      },
      id_language: {
        type: DataTypes.INTEGER,
        references: { model: "language", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "job_language",
      name: {},
    }
  );
  return job_language;
};
