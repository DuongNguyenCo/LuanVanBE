"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("candi_busis", {
      id_candidate: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_business: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.FLOAT,
      },
      star: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("candi_busis");
  },
};
