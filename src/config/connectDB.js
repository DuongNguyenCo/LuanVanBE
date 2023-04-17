const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASS,
  {
    host: process.env.HOST,
    dialect: "mysql",
    logging: false,
  }
);
let connet = async () => {
  try {
    await sequelize.authenticate();
    console.log("ket noi thanh cong");
  } catch (e) {
    console.error("ket noi that bai", e);
  }
};
module.exports = connet;
