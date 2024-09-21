'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      Image: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      checkBox1: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      checkBox2: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      checkBox3: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      checkBox4: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      sDate: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      eDate: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      duration: {
        type: Sequelize.STRING,
        allowNull: true 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('blogs');
  }
};