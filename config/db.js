// config/db.js

const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
  process.env.DATABASE_URL,
  {
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DIALECT
  }
)

module.exports = sequelize