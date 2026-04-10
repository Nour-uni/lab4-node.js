const sendSuccess = (res, data, message = '', statusCode = 200) => {
    res.status(statusCode).json({
        success: true,
        data,
        message,
        timestamp: new Date()
    });
};

const sendError = (res, error, statusCode = 500) => {
    res.status(statusCode).json({
        success: false,
        error: {
            code: error.code || 'SERVER_ERROR',
            message: error.message || 'Internal Server Error',
            details: error.details || null
        },
        timestamp: new Date()
    });
};

module.exports = { sendSuccess, sendError };
