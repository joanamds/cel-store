const { Products } = require('../models/ProductsModel');

const getAllProducts = async () => {
  const products = await Products.findAll({
    attributes: { exclude: ['id'] }
  });
  if(!products) return { status: 500, message: 'Something went wrong' };
  return { status: 200, products };
}

const getProductById = async (id) => {
  const product = await Products.findByPk(id, {
    attributes: { exclude: ['id'] }
  });
  if (!product) return { status: 404, message: 'Product not found' };
  return { status: 200, product };
}

const searchProduct = async (searchQuery) => {
  const product = await Products.findOne({
    where: { name: {
      [Op.iLike]: `%${searchQuery}%`
    }},
    attributes: { exclude: ['id'] }
  });
  if (!product) return { status: 404, message: 'Product not found' };
  return { status: 200, product };
}

module.exports = {
  getAllProducts,
  getProductById,
  searchProduct
}