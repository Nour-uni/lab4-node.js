const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// General 404 Handler for undefined routes
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        error: {
            code: 'NOT_FOUND',
            message: 'Resource not found'
        },
        timestamp: new Date()
    });
});

// Use global error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
