"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("jobs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_job_type: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      salary: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      des: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      request: {
        type: Sequelize.TEXT,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addIndex("jobs", {
      fields: [{ name: "name", length: 255 }],
      type: "FULLTEXT",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("jobs");
  },
};
