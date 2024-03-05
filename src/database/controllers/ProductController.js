const { decodedToken } = require('../auth/validateJWT');
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

const deleteProduct = async (req, res) => {
  const authorization = req.header('authorization');
  const { id } = req.params;
  const token = decodedToken(authorization);
  if(token.role !== 'admin') return res.status(403).json({ message: 'Restricted access' });
  const { status, message } = await ProductService.deleteProduct(id);
  return res.status(status).json(message);
}

const updateProduct = async (req, res) => {
  const newInfo = req.body;
  const authorization = req.header('authorization');
  const { id } = req.params;
  const token = decodedToken(authorization);
  if(token.role !== 'admin') return res.status(403).json({ message: 'Restricted access' });
  const { status, message } = await ProductService.updateProduct(id, newInfo)
  return res.status(status).json(message);
}

const createProduct = async (req, res) => {
  const newProduct = req.body;
  const authorization = req.header('authorization');
  const token = decodedToken(authorization);
  if(token.role !== 'admin') return res.status(403).json({ message: 'Restricted access' });
  const { status, message } = await ProductService.createProduct(newProduct);
  return res.status(status).json(message);
}

module.exports = {
  getAllProducts,
  getProductById,
  searchProduct,
  deleteProduct,
  updateProduct,
  createProduct
}