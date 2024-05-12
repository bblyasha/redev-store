const { param, body, validationResult } = require('express-validator');

const goodValidationRules = [
    body('name').isLength({ min: 1 }).withMessage('Name is required'),
    body('description').isLength({ min: 1 }).withMessage('Description is required'),
    body('category').isLength({ min: 1 }).withMessage('Category is required'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('image').isBase64().withMessage('Image must be a base64 encoded image data'),
    body('amount').isInt({ min: 0 }).withMessage('Amount must be a non-negative integer')
];

function validateGood(req, res, next) {
    for (let rule of goodValidationRules) {
        rule(req);
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
}

function validateId(req, res, next) {
    param('id').isInt().withMessage('ID must be an integer')(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
}

module.exports = {
    validateGood,
    validateId
}
