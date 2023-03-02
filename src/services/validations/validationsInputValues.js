const {
  productNameSchemaRequired,
  productNameSchemaMin5,
  salesQuantityInputs } = require('./schemas');
  const { products } = require('../../models');

const validateNameProduct = (name) => {
  const error1 = productNameSchemaRequired.validate(name).error;
  const error2 = productNameSchemaMin5.validate(name).error;
  
  if (error1) return { type: 400, message: '"name" is required' };
  if (error2) return { type: 422, message: '"name" length must be at least 5 characters long' };
  
  return { type: null, message: '' };
};

const salesInputs = (itensSold) => { 
  let validation;
  itensSold.forEach((sale) => {
    const { error } = salesQuantityInputs.validate(sale.quantity);
    if (error) validation = error;
  });    
  if (validation) {
    return { type: 422, message: '"quantity" must be greater than or equal to 1' };
  }
  return { type: null, message: '' };
};

const checkContainProduct = async (itensSold) => {
  let validation = false;
  const promises = await itensSold.map(async (sale) => {
    const produto = await products.findById(sale.productId);
    if (produto === undefined) {
      validation = true;
    }
  });
  await Promise.all(promises);
  
  if (validation) {
    return { type: 404, message: 'Product not found' };
  } return { type: null, message: '' };
};

module.exports = {
  validateNameProduct,
  salesInputs,
  checkContainProduct,
};