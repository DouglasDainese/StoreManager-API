const { products } = require('../models');

const servicesFindAll = async () => {
  const allProducts = await products.findAll();
  return { type: null, messenger: allProducts };
};

const servicesFindBiId = async ({ id }) => {
  const productById = await products.findById(id);

  if (!productById) { return { type: 404, messenger: '"Product not found"' }; }

  return { type: null, messenger: productById };
};

module.exports = {
  servicesFindAll,
  servicesFindBiId,
};