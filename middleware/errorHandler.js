const { sendError } = require('../utils/response');

const errorHandler = (error, req, res, next) => {
    console.error('Error:', error);

    // Validation error
    if (error.name === 'ValidationError') {
        return sendError(res, {
            code: 'VALIDATION_ERROR',
            message: error.message,
            details: error.details
        }, 400);
    }

    // Generic error
    sendError(res, {
        code: 'SERVER_ERROR',
        message: 'Internal server error'
    }, 500);
};

module.exports = errorHandler;
