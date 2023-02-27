const productsServices = require('../services');

const getAllProduct = async (_req, res) => {
  const { type, message } = await productsServices.servicesFindAll();

  if (type) return res.status(type).json(message);

  return res.status(200).json(message);
};

const getByIdProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsServices.servicesFindBiId(id);
  
console.log(message);

  if (type) { return res.status(type).json({ message }); }

  return res.status(200).json(message);
};

module.exports = {
  getAllProduct,
  getByIdProduct,
};