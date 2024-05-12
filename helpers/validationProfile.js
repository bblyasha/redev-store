const { body, validationResult } = require('express-validator');

const profileValidationRules = [
    body('name').notEmpty().withMessage('Name is required'),
    body('surname').notEmpty().withMessage('Surname is required'),
    body('lastname').notEmpty().withMessage('Lastname is required'),
    body('phone').notEmpty().withMessage('Phone is required').isMobilePhone('any', { strictMode: false }).withMessage('Invalid phone number format')
];

function validateProfile(req, res, next) {
    for (let rule of profileValidationRules) {
        rule(req);
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
}

const optionalValidationRules = [
    body('name').optional().notEmpty().withMessage('Name is required'),
    body('surname').optional().notEmpty().withMessage('Surname is required'),
    body('lastname').optional().notEmpty().withMessage('Lastname is required'),
    body('phone').optional().isMobilePhone('any', { strictMode: false }).withMessage('Invalid phone number format')
];

function validateOptionalProfile(req, res, next) {
    for (let rule of optionalValidationRules) {
        rule(req);
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
}

module.exports = {
    validateProfile,
    validateOptionalProfile
}
