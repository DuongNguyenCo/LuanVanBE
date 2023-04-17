"use strict";
const { Model } = require("sequelize");
const post = require("./Post");
module.exports = (sequelize, DataTypes) => {
  class candidate extends Model {
    static associate(models) {
      candidate.hasMany(models.cv, {});
      candidate.belongsToMany(models.business, {
        through: models.candi_busi,
        foreignKey: "id_candidate",
      });
      candidate.belongsToMany(models.post, {
        through: models.candi_post,
        foreignKey: "id_candidate",
      });
    }
  }
  candidate.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "candidate",
    }
  );
  return candidate;
};
