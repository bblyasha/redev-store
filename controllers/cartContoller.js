const { Model } = require('sequelize')
const CartService = require('../services/cartService')

class CartController {
    async addToCart(req, res) {
        try {
            const userId = req.id
            const { goodId, amount } = req.body
            const addedItem = await CartService.addToCart(userId, goodId, amount)
            res.send(addedItem)
        } catch (error) {
            res.status(500).send('Internal Server Error')
        }
    }

}

module.exports = new CartController