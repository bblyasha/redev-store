const pgDb = require('pg')
const db = require('../config/db')
const { Sequelize } = require('sequelize')

const User = db.define(
    'users',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false  
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
)

module.exports = User;