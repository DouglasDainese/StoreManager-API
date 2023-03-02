const validateSalesParams = (req, res, next) => {
  if (!req.body.every((param) => Object.keys(param).includes('productId'))) {
   return res.status(400).json({ message: '"productId" is required' });
  }
  if (!req.body.every((param) => Object.keys(param).includes('quantity'))) {
  return res.status(400).json({ message: '"quantity" is required' });
  }
 return next();
}; 

module.exports = {
  validateSalesParams,
};