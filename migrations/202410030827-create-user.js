const Category = require("../models/category");

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Users', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        customerId: {
          allowNull: false,
          type: Sequelize.DataTypes.STRING
       },
       name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
    },
        email: {
            allowNull: false,
            type: Sequelize.DataTypes.STRING
        },
        mobNo: {
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER
        },
        password: {
            allowNull: false,
            type: Sequelize.DataTypes.STRING
        },
        token: {
            allowNull: false,
            type: Sequelize.DataTypes.STRING
        },
        refreshToken: {
            allowNull: false,
            type: Sequelize.DataTypes.STRING
        },
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Users');
    },
  };
  