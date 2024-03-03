const { Product } = require('../models');
const { Op } = require('sequelize');

const getAllProducts = async () => {
  const products = await Product.findAll({
    attributes: { exclude: ['id'] }
  });
  console.log(products);
  return { status: 200, message: products };
}

const getProductById = async (id) => {
  const product = await Product.findByPk(id, {
    attributes: { exclude: ['id'] }
  });
  if (!product) return { status: 404, message: 'Product not found' };
  return { status: 200, message: product };
}

const searchProduct = async (searchQuery) => {
  const product = await Product.findOne({
    where: { name: {
      [Op.iLike]: `%${searchQuery}%`
    }},
    attributes: { exclude: ['id'] }
  });
  if (!product) return { status: 404, message: 'Product not found' };
  return { status: 200, message: product };
}

const updateProduct = async (newInfos) => {
  const product = await Product.findByPk(id);
  if (!product) return { status: 404, message: 'Product not found' };
  const newProduct = await Product.update(newInfos, {
    where: { id }
  });
  return { status: 200, message: newProduct }
}

module.exports = {
  getAllProducts,
  getProductById,
  searchProduct,
  updateProduct
}