// config/db.js

const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
  'redevstore', 
  'postgres', 
  'bblyasha', 
  {
  host: 'localhost',
  dialect: 'postgres'
});


module.exports = sequelize