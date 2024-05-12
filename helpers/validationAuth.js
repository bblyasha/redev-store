const { body, validationResult } = require('express-validator');

const authValidationRules = [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

function authValidation(req, res, next) {
    for (let rule of authValidationRules) {
        rule(req)
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    next()
}

module.exports = {
    authValidation
}