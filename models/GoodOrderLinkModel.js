const pgDb = require('pg')
const db = require('../config/db')
const { DataTypes, Sequelize } = require('sequelize')
const GoodModel = require('./GoodModel')
const OrderModel = require('./OrderModel')

const LinkGoodOrder = db.define(
    'linksGoodOrder',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        good_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: GoodModel,
                key: 'id'
            }
        },
        order_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: OrderModel,
                key: 'id'
            }
        }
    }
)

module.exports = LinkGoodOrder;