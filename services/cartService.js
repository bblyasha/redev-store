const { CartModel } = require('../models/model')
const { GoodModel } = require('../models/model')

class CartService {
    #COLLECTION = 'carts'
    async addToCart(userId, goodId, amount) {
        try {
            const good = await GoodModel.findByPk(goodId)
            if (!good) {
                console.error('Good not found')
            }
            if (good.amount < amount) {
                console.error('Not enough goods in stock')
            }
            const summedPrice = good.price * amount
            good.amount -= amount
            await good.save()
            const cartItem = await CartModel.create({ userId, goodId, amount, summedPrice })
            return cartItem
        } catch (error) {
            console.error('Error adding to cart:', error)
        }
    }
}


module.exports = new CartService