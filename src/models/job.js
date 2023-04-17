"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class job extends Model {
    static associate(models) {
      job.belongsTo(models.typejob, {
        foreignKey: "id_job_type",
      });
      job.hasOne(models.post, { foreignKey: "id_job" });
      job.belongsToMany(models.language, {
        through: models.job_language,
        foreignKey: "id_job",
      });
      job.belongsToMany(models.address, {
        through: models.job_address,
        foreignKey: "id_job",
      });
    }
  }
  job.init(
    {
      id_job_type: DataTypes.INTEGER,
      name: DataTypes.STRING,
      salary: DataTypes.INTEGER,
      des: DataTypes.TEXT,
      request: DataTypes.TEXT,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "job",
    }
  );
  return job;
};
