const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();
console.log('process.env.DB_NAME', process.env.DB_NAME)

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

const db = {
    sequelize,
    Sequelize,
};

module.exports = db;
