const ProductController = require('../../database/controllers/ProductController');
// const { validateToken } = require('../../database/auth/validateJWT');

module.exports = async (req, res) => {
  try {
    // validateToken(req, res, next);
    await ProductController.getAllProducts(req, res);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.toString() });
  }
};