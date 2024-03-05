const ProductController = require('../../database/controllers/ProductController');
const express = require('express');
const router = express.Router();
const { validateToken } = require('../../database/auth/validateJWT');
const {
  validateNewProduct,
  validateName,
  validateBrand,
  validatePrice,
  validateColor
} = require('../../database/middlewares/productsValidations');

router.post('/', validateToken,
  validateNewProduct,
  validateName,
  validateBrand,
  validatePrice,
  validateColor,
  ProductController.createProduct);
router.get('/search', ProductController.searchProduct);
router.get('/:id', ProductController.getProductById);
router.put('/:id', validateToken, ProductController.updateProduct);
router.delete('/:id', validateToken, ProductController.deleteProduct);
router.get('/', ProductController.getAllProducts);

module.exports = router;