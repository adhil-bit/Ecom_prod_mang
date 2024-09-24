const Category = require("../models/category");

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('SubCategories', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        CategoryId: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },

      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('SubCategories');
    },
  };
  