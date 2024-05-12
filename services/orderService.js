const { CartModel } = require('../models/model')
const { OrderModel } = require('../models/model')


class OrderService {
  async createOrder(userId, deliveryAddress, paymentMethod, status) {
    try {
        const cartItems = await CartModel.findAll()
        if (cartItems.length === 0) {
            throw new Error('Cart is empty')
        }
        const totalPrice = cartItems.reduce((total, item) => total + item.summedPrice, 0)
        const order = await OrderModel.create({
            userId,
            deliveryAddress,
            paymentMethod,
            status,
            totalPrice
        })
        await CartModel.destroy({ where: {} })
        return order
    } catch (error) {
        console.error('Failed to create order', error)
    }
}

  async updateOrderStatus(orderId, status) {
    try {
        const order = await OrderModel.findByPk(orderId)
        if (!order) {
          throw new Error('Order not found')
        }
        order.status = status;
        await order.save();
        return order;
    } catch (error) {
        console.error('Failed to update order status:', error)
    }
}

  async getOrders(userId) {
    try {
        const orders = await OrderModel.findAll({ where: { userId } })
        return orders
      } catch (error) {
        console.error('Failed to get orders by user id', error)
    }
}

}


module.exports = new OrderService
