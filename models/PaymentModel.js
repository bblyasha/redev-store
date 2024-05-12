const pgDb = require('pg')
const db = require('../config/db')
const { Sequelize } = require('sequelize')
const OrderModel = require('./OrderModel')


const Payment = db.define(
    'payments',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        statusPaid: {
            type: Sequelize.STRING,
            allowNull: false  
        },
        orderId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: OrderModel,
                key: 'id'
            }
        }
    }
)

module.exports = Payment;