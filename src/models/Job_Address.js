"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class job_address extends Model {
    static associate(models) {}
  }
  job_address.init(
    {
      id_job: {
        type: DataTypes.INTEGER,
        references: { model: "job", key: "id" },
      },
      id_address: {
        type: DataTypes.INTEGER,
        references: { model: "address", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "job_address",
      name: {},
    }
  );
  return job_address;
};
