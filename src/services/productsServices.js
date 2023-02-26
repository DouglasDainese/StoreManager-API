const { products } = require('../models');

const servicesFindAll = async () => {
  const allProducts = await products.findAll();
  return { type: null, messenger: allProducts };
};

module.exports = {
  servicesFindAll,
};