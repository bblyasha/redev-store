const { body, validationResult } = require('express-validator');

const validateProfile = [
    body('name').notEmpty().withMessage('Name is required'),
    body('surname').notEmpty().withMessage('Surname is required'),
    body('lastname').notEmpty().withMessage('Lastname is required'),
    body('phone').notEmpty().withMessage('Phone is required').isMobilePhone('any', { strictMode: false }).withMessage('Invalid phone number format'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];


const validateOptionalProfile = [
    body('name').optional().notEmpty().withMessage('Name is required'),
    body('surname').optional().notEmpty().withMessage('Surname is required'),
    body('lastname').optional().notEmpty().withMessage('Lastname is required'),
    body('phone').optional().isMobilePhone('any', { strictMode: false }).withMessage('Invalid phone number format'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];


module.exports = {
    validateProfile,
    validateOptionalProfile
}
