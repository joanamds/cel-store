const ProductController = require('../../database/controllers/ProductController');
const {
  validateNewProduct,
  validateName,
  validateBrand,
  validatePrice,
  validateColor
} = require('../../database/middlewares/productsValidations');
const { validateToken } = require('../../database/auth/validateJWT');

module.exports = async (req, res) => {
  try {
    validateToken(req, res);
    validateNewProduct(req, res);
    validateName(req, res);
    validateBrand(req, res);
    validatePrice(req, res);
    validateColor(req, res);
    await ProductController.createProduct(req, res);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};
