const { productNameSchemaRequired, productNameSchemaMin5 } = require('./schemas');

const validateNameProduct = (name) => {
  const error1 = productNameSchemaRequired.validate(name).error;
  const error2 = productNameSchemaMin5.validate(name).error;
  
  if (error1) return { type: 400, message: '"name" is required' };
  if (error2) return { type: 422, message: '"name" length must be at least 5 characters long' };
  
  return { type: null, message: '' };
};

module.exports = {
  validateNameProduct,
};