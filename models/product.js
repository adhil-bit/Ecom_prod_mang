const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;

const Products = sequelize.define('Products', {
    // productId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    // },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subCategoryId:{
        type:DataTypes.INTEGER,
        // allowNull: false,
    },
    varientDetails: {
        allowNull: false,
        type: DataTypes.JSON
    },
    imageUrl: {
        allowNull: false,
        type: DataTypes.JSON
    },
    deiscription: {
        type: DataTypes.STRING,
        allowNull: false,
      },

}, {
    tableName: 'Products',
    timestamps: false,
});

module.exports = Products;
