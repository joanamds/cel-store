const { Product } = require('../models');

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

module.exports = {
  getAllProducts,
  getProductById,
  searchProduct
}