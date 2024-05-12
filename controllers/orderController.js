const OrderService = require('../services/orderService');


class OrderController {
  async createOrder (req, res) {
    try {
        const userId = req.id
        const { deliveryAddress, paymentMethod, status } = req.body
        const order = await OrderService.createOrder(userId, deliveryAddress, paymentMethod, status);
        res.send(order);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

async updateOrderStatus(req, res) {
  try {
      const orderId = req.params.id
      const { status } = req.body
      const orderStatus = await OrderService.updateOrderStatus(orderId, status)
      res.send(orderStatus)
    } catch (error) {
      res.status(500).send('Internal Server Error')
    }
  }

  async getOrders(req, res) {
    try {
        const userId = req.id;
        const orders = await OrderService.getOrders(userId);
        res.send(orders);
    } catch (error) {
        console.error('Error getting orders:', error);
        res.status(500).send('Internal Server Error');
    }
}
}


module.exports = new OrderController
