const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;

const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'categories',
    timestamps: true,
});

module.exports = Category;
