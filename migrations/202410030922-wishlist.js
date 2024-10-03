const Category = require("../models/category");

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('WishLists', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        customerId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        productId: {
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER
        },
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('WishLists');
    },
  };
  