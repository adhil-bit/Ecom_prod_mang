const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;

const users = sequelize.define('users', {
    customerId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,  // Ensure this field is defined
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    refreshToken: {
        type: DataTypes.STRING,
        // allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'users',
    timestamps: false,
});

module.exports = users;
