const { products } = require('../models');
const { validateNameProduct } = require('./validations/validationsInputValues');

const servicesFindAll = async () => {
  const allProducts = await products.findAll();
  return { type: null, message: allProducts };
};

const servicesFindById = async (id) => {
  const productById = await products.findById(id);

  if (!productById) { return { type: 404, message: 'Product not found' }; }

  return { type: null, message: productById };
};

const insertProduct = async (name) => {
  const validationNameResult = validateNameProduct(name);
  if (validationNameResult.type) return validationNameResult; 
  
  const idNewProduct = await products.insert(name);
  const newProduct = await products.findById(idNewProduct);
  
  return { type: null, message: newProduct };
};

module.exports = {
  servicesFindAll,
  servicesFindById,
  insertProduct,
};