const pgDb = require('pg')
const db = require('../config/db')
const { Sequelize } = require('sequelize')
const UsersModel = require('./UsersModel')
const GoodModel = require('./GoodModel')

const Order = db.define(
    'orders',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false 
        },
        deliveryAddress: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        paymentMethod: {
            type: Sequelize.STRING,
            allowNull: false
        },
        totalPrice: {
            type: Sequelize.FLOAT,
            allowNull: false 
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

module.exports = Order;