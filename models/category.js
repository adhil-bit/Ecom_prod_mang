const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;

const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // createdAt:{
    //     type:DataTypes.DATE,
    //     defaultValue:true
    // }
}, {
    tableName: 'categories',
    timestamps: false,
});

module.exports = Category;
