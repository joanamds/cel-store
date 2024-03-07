const ProductController = require('../../database/controllers/ProductController');
const { validateToken } = require('../../database/auth/validateJWT');

module.exports = async (req, res) => {
  try {
    validateToken(req, res);
    await ProductController.deleteProduct(req, res);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};