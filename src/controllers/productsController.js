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
  const { type, message } = await productsServices.insertProduct(name);
  if (type) { return res.status(type).json({ message }); }

  return res.status(201).json(message);
};

const updateProductController = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { type, message } = await productsServices.updateProductService({ id, name });

  if (type) return res.status(type).json({ message });

  await res.status(200).json(message);
};

const deleteProductController = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsServices.deleteProductService(id);
  if (type) return res.status(type).json({ message });

  return res.status(204).json();
};

module.exports = {
  getAllProduct,
  getByIdProduct,
  insertNewProduct,
  updateProductController,
  deleteProductController,
};