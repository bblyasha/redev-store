const pgDb = require('pg')
const db = require('../config/db')
const { DataTypes, Sequelize } = require('sequelize')
const GoodModel = require('./GoodModel')
const CartModel = require('./CartModel')

const LinkGoodCart = db.define(
    'linksGoodCarts',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        goodId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: GoodModel,
                key: 'id'
            }
        },
        cartId: {
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