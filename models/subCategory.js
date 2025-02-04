const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;

const SubCategory = sequelize.define('SubCategory', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoryId:{
        type:DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'SubCategories',
    timestamps: false,
});

module.exports = SubCategory;
