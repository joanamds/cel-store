const { Products } = require('../models/ProductsModel');

const getAllProducts = async () => {
  const products = await Products.findAll({
    attributes: { exclude: ['id'] }
  });
  return { status: 200, products };
}

const getProductById = async (id) => {
  const product = await Products.findByPk(id, {
    attributes: { exclude: ['id'] }
  });
  return product;
}

const searchProduct = async (searchQuery) => {
  const product = await Products.findOne({
    where: { name: {
      [Op.iLike]: `%${searchQuery}%`
    }},
    attributes: { exclude: ['id'] }
  });
  return product;
}

module.exports = {
  getAllProducts,
  getProductById,
  searchProduct
}