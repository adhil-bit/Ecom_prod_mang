const Category = require("../models/category");

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Products', {
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
        varientDetails: {
            allowNull: false,
            type: Sequelize.DataTypes.JSON
        },
        imageUrl: {
            allowNull: false,
            type: Sequelize.DataTypes.JSON
        },
       subCategoryId : {
            allowNull: false,
            type: Sequelize.DataTypes.INTEGER
        },
        deiscription: {
            type: Sequelize.STRING,
            allowNull: false,
          },
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Products');
    },
  };
  