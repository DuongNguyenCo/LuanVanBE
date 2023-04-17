"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_business: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      id_job: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      expire: {
        type: Sequelize.DATE,
      },
      step1: {
        type: Sequelize.INTEGER,
      },
      step2: {
        type: Sequelize.INTEGER,
      },
      step3: {
        type: Sequelize.INTEGER,
      },
      step4: {
        type: Sequelize.INTEGER,
      },
      step5: {
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("posts");
  },
};
