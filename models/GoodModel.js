const pgDb = require('pg')
const db = require('../config/db')
const { Sequelize } = require('sequelize')
const UsersModel = require('./UsersModel')

const Good = db.define(
    'goods',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false  
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.BLOB,
            allowNull: false
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        amount: {
            type: Sequelize.INTEGER,
            allowNull: true
            
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: UsersModel,
                key: 'id'
            }
        }
    })

module.exports = Good;