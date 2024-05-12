const { param, body, validationResult } = require('express-validator');

const orderValidationRules = [
    body('status').notEmpty().withMessage('Status is required'),
    body('deliveryAddress').notEmpty().withMessage('Delivery address is required'),
    body('paymentMethod').notEmpty().withMessage('Payment method is required')
];

function validateOrder(req, res, next) {
    for (let rule of orderValidationRules) {
        rule(req);
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
}

const orderIdValidationRules = [
    param('orderId').isInt().withMessage('Order ID must be an integer')
];

function validateOrderId(req, res, next) {
    for (let rule of orderIdValidationRules) {
        rule(req);
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
}

module.exports = {
    validateOrder,
    validateOrderId
}
