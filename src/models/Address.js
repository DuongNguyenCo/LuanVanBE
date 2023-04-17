"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    static associate(models) {
      address.belongsTo(models.business, {
        foreignKey: "id_business",
      });
      address.belongsToMany(models.job, {
        through: models.job_address,
        foreignKey: "id_address",
      });
    }
  }
  address.init(
    {
      id_business: DataTypes.INTEGER,
      street: DataTypes.STRING,
      ward: DataTypes.STRING,
      district: DataTypes.STRING,
      city: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "address",
    }
  );
  return address;
};
