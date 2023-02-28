const Joi = require('joi');

const productNameSchemaRequired = Joi.string().required();

const productNameSchemaMin5 = productNameSchemaRequired.min(5);

module.exports = {
  productNameSchemaRequired,
  productNameSchemaMin5,
};