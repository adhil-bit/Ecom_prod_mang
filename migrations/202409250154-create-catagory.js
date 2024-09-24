module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('categories', {
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
      //   createdAt: {
      //     allowNull: false,
      //     type: Sequelize.DATE,
      // },
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('categories');
    },
  };
  