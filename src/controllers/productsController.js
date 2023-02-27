const productsServices = require('../services');

const getAllProduct = async (_req, res) => {
  const { message } = await productsServices.servicesFindAll();

  return res.status(200).json(message);
};

const getByIdProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsServices.servicesFindById(id);

  if (type) { return res.status(type).json({ message }); }

  return res.status(200).json(message);
};

const insertNewProduct = async (req, res) => {
  const { name } = req.body;

  const { message } = await productsServices.insertProduct(name);
  return res.status(201).json(message);
};

module.exports = {
  getAllProduct,
  getByIdProduct,
  insertNewProduct,
};