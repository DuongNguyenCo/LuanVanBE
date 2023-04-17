"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class typejob extends Model {
    static associate(models) {
      typejob.hasMany(models.job, {
        foreignKey: "id_job_type",
      });
    }
  }
  typejob.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "typejob",
    }
  );
  return typejob;
};
