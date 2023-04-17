"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class candi_busi extends Model {
    static associate(models) {}
  }
  candi_busi.init(
    {
      id_candidate: {
        type: DataTypes.INTEGER,
        references: { model: "candidate", key: "id" },
      },
      id_business: {
        type: DataTypes.INTEGER,
        references: { model: "business", key: "id" },
      },
      star: DataTypes.FLOAT,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "candi_busi",
    }
  );
  return candi_busi;
};
