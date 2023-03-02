const Joi = require('joi');

const productNameSchemaRequired = Joi.string().required();

const productNameSchemaMin5 = productNameSchemaRequired.min(5);

const salesQuantityInputs = Joi.number().min(1);

module.exports = {
  productNameSchemaRequired,
  productNameSchemaMin5,
  salesQuantityInputs,
};