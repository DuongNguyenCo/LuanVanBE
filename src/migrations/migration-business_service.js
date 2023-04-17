"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("business_services", {
      id_service: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_business: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      expire: {
        allowNull: false,
        type: Sequelize.BIGINT,
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
    await queryInterface.dropTable("business_services");
  },
};
