const ProductService = require('../services/ProductService');

const getAllProducts = async (_req, res) => {
  const { status, message} = await ProductService.getAllProducts();
  return res.status(status).json(message);
}

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await ProductService.getProductById(id);
  return res.status(status).json(message);
}

const searchProduct = async (req, res) => {
  const searchQuery = req.query.q;
  const { status, message } = await ProductService.searchProduct(searchQuery);
  return res.status(status).json(message);
}

module.exports = {
  getAllProducts,
  getProductById,
  searchProduct
}