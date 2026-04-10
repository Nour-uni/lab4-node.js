const Product = require('../models/product');
const { sendSuccess, sendError } = require('../utils/response');

// Exercise 2: Add Pagination
// Exercise 3: Complete REST API logic
exports.getAllProducts = (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const allProducts = Product.getAll();
        
        // Manual pagination over in-memory array
        const paginatedProducts = allProducts.slice(skip, skip + limit);
        const total = allProducts.length;

        sendSuccess(res, {
            products: paginatedProducts,
            pagination: {
                total,
                page,
                limit,
                pages: Math.ceil(total / limit),
                hasNext: page < Math.ceil(total / limit),
                hasPrev: page > 1
            }
        }, 'Products retrieved successfully');
    } catch (error) {
        sendError(res, {
            code: 'FETCH_ERROR',
            message: 'Failed to fetch products',
            details: error.message
        });
    }
};

exports.getProductById = (req, res) => {
    try {
        const product = Product.getById(req.params.id);

        if (!product) {
            return sendError(res, {
                code: 'NOT_FOUND',
                message: 'Product not found'
            }, 404);
        }

        sendSuccess(res, product, 'Product retrieved successfully');
    } catch (error) {
        sendError(res, {
            code: 'FETCH_ERROR',
            message: 'Failed to fetch product'
        });
    }
};

exports.createProduct = (req, res) => {
    try {
        const product = Product.create(req.body);
        sendSuccess(res, product, 'Product created successfully', 201);
    } catch (error) {
        sendError(res, {
            code: 'CREATE_ERROR',
            message: 'Failed to create product'
        });
    }
};

exports.updateProduct = (req, res) => {
    try {
        const product = Product.update(req.params.id, req.body);

        if (!product) {
            return sendError(res, {
                code: 'NOT_FOUND',
                message: 'Product not found'
            }, 404);
        }

        sendSuccess(res, product, 'Product updated successfully');
    } catch (error) {
        sendError(res, {
            code: 'UPDATE_ERROR',
            message: 'Failed to update product'
        });
    }
};

exports.deleteProduct = (req, res) => {
    try {
        const product = Product.delete(req.params.id);

        if (!product) {
            return sendError(res, {
                code: 'NOT_FOUND',
                message: 'Product not found'
            }, 404);
        }

        sendSuccess(res, product, 'Product deleted successfully', 200); // Or 204 No Content
    } catch (error) {
        sendError(res, {
            code: 'DELETE_ERROR',
            message: 'Failed to delete product'
        });
    }
};
