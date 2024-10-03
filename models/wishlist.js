const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;

const wishlist = sequelize.define('wishlist', {
    customerId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    tableName: 'wishlist',
    timestamps: false,
});

module.exports = wishlist;
