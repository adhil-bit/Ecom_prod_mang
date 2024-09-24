const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;

const Category = sequelize.define('SubCategory', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CategoryId:{
        type:DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'categories',
    timestamps: false,
});

module.exports = Category;
