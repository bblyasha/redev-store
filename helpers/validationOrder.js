const { param, body, validationResult } = require('express-validator');

const validateOrder = [
    body('status').notEmpty().withMessage('Status is required'),
    body('deliveryAddress').notEmpty().withMessage('Delivery address is required'),
    body('paymentMethod').notEmpty().withMessage('Payment method is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];


const validateOrderId = [
    param('orderId').isInt().withMessage('Order ID must be an integer'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];



module.exports = {
    validateOrder,
    validateOrderId
}
