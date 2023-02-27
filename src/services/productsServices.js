const { products } = require('../models');

const servicesFindAll = async () => {
  const allProducts = await products.findAll();
  return { type: null, message: allProducts };
};

const servicesFindById = async (id) => {
  const productById = await products.findById(id);

  if (!productById) { return { type: 404, message: 'Product not found' }; }

  return { type: null, message: productById };
};

module.exports = {
  servicesFindAll,
  servicesFindById,
};