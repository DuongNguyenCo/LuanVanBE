"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    static associate(models) {
      post.belongsTo(models.business, {
        foreignKey: "id_business",
      });
      post.belongsTo(models.job, {
        foreignKey: "id_job",
      });
      post.belongsToMany(models.candidate, {
        through: models.candi_post,
        foreignKey: "id_post",
      });
      post.belongsToMany(models.cv, {
        through: models.cv_post,
        foreignKey: "id_post",
      });
      post.belongsToMany(models.service, {
        through: models.post_service,
        foreignKey: "id_post",
      });
    }
  }
  post.init(
    {
      id_business: DataTypes.INTEGER,
      id_job: DataTypes.INTEGER,
      expire: DataTypes.DATE,
      step1: DataTypes.INTEGER,
      step2: DataTypes.INTEGER,
      step3: DataTypes.INTEGER,
      step4: DataTypes.INTEGER,
      step5: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
