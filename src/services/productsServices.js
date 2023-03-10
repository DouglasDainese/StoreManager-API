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

const updateProductService = async ({ id, name }) => {
  const validationNameResult = validateNameProduct(name);
  if (validationNameResult.type) return validationNameResult; 

  await products.update({ id, name });
  const productUpdate = await products.findById(id);

  if (productUpdate === undefined) return { type: 404, message: 'Product not found' };

  return { type: null, message: productUpdate };
};

const deleteProductService = async (id) => {
  const checkProduct = await products.findById(id);

  if (checkProduct === undefined) return { type: 404, message: 'Product not found' };

  await products.deleteProduct(id);
  return { type: null, message: null };
};

const searchProduct = async (search) => {
  const result = await products.searchByName(search);
  return { type: null, message: result };
};

module.exports = {
  servicesFindAll,
  servicesFindById,
  insertProduct,
  updateProductService,
  deleteProductService,
  searchProduct,
};