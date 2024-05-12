const pgDb = require('pg')
const db = require('../config/db')
const { Sequelize } = require('sequelize')
const UsersModel = require('./UsersModel')

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
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: UsersModel,
                key: 'id'
            }
        }
    })

module.exports = Order;