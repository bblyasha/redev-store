const { body, validationResult } = require('express-validator');

const cartValidationRules = [
    body('goodId').isInt().withMessage('Good ID must be an integer'),
    body('amount').isInt().withMessage('Amount must be an integer')
];

function validateCart(req, res, next) {
    for (let rule of cartValidationRules) {
        rule(req)
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next()
}

module.exports = {
    validateCart
}