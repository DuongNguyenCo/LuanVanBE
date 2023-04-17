"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class candi_post extends Model {
    static associate(models) {}
  }
  candi_post.init(
    {
      id_candidate: {
        type: DataTypes.INTEGER,
        references: { model: "candidate", key: "id " },
      },
      id_post: {
        type: DataTypes.INTEGER,
        references: { model: "post", key: "id " },
      },
    },
    {
      sequelize,
      modelName: "candi_post",
    }
  );
  return candi_post;
};
