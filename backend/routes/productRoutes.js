const express = require('express');
const router = express.Router();

// Make sure your controller file is named: productController.js (lowercase!)
const { getAllProducts, getProductById } = require('../controllers/productController');

// Route to get all products
router.get('/', getAllProducts);

// Route to get a product by its ID
router.get('/:id', getProductById);

// Export the router
module.exports = router;
