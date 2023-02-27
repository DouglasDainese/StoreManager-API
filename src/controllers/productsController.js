const productsServices = require('../services');

const getAllProduct = async (_req, res) => {
  const { type, messenger } = await productsServices.servicesFindAll();

  if (type) return res.status(type).json(messenger);

  return res.status(200).json(messenger);
};

module.exports = {
  getAllProduct,
};