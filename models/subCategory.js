const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;

const SubCategory = sequelize.define('SubCategory', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CategoryId:{
        type:DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'SubCategory',
    timestamps: false,
});

module.exports = SubCategory;
