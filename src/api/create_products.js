const ProductController = require('../database/controllers/ProductController');
const {
  validateNewProduct,
  validateName,
  validateBrand,
  validatePrice,
  validateColor
} = require('../database/middlewares/productsValidations');
const { validateToken } = require('../database/auth/validateJWT');

module.exports = async (req, res, next) => {
  try {
    validateToken(req, res, next);
    validateNewProduct(req, res, next);
    validateName(req, res, next);
    validateBrand(req, res, next);
    validatePrice(req, res, next);
    validateColor(req, res, next);
    await ProductController.createProduct(req, res);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};
