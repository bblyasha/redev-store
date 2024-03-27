const pgDb = require('pg')
const db = require('../config/db')
const { DataTypes, Sequelize } = require('sequelize')
const GoodModel = require('./GoodModel')
const CartModel = require('./CartModel')

const LinkGoodCart = db.define(
    'linksGoodCart',
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
        cart_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: CartModel,
                key: 'id'
            }
        }
    }
)

module.exports = LinkGoodCart;