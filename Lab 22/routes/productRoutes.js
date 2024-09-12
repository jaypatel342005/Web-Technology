const express = require('express');
const { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/productController');
const validateProduct = require('../middleware/validateProduct');

const router = express.Router();

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Retrieve all products
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter by category
 *     responses:
 *       200:
 *         description: A list of products
 */

router
  .route('/')
  .get(getAllProducts)
  .post(validateProduct, createProduct);

router
  .route('/:id')
  .get(getProductById)
  .put(validateProduct, updateProduct)
  .delete(deleteProduct);

module.exports = router;
