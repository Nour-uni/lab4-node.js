const { sendError } = require('../utils/response');

const validateProduct = (req, res, next) => {
    const { name, price, stock, category } = req.body;
    const errors = {};

    if (!name || name.trim().length === 0) {
        errors.name = 'Product name is required';
    }

    if (price === undefined || typeof price !== 'number' || price < 0) {
        errors.price = 'Valid price is required (must be a positive number)';
    }

    if (stock === undefined || !Number.isInteger(stock) || stock < 0) {
        errors.stock = 'Valid stock amount is required (must be a positive integer)';
    }

    if (!category || category.trim().length === 0) {
        errors.category = 'Product category is required';
    }

    if (Object.keys(errors).length > 0) {
        return sendError(res, {
            code: 'VALIDATION_ERROR',
            message: 'Validation failed',
            details: errors
        }, 400);
    }

    next();
};

module.exports = { validateProduct };
