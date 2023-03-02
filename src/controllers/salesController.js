const saleService = require('../services');

const insertsSales = async (req, res) => {
  const { type, message } = await saleService.insertSales(req.body);
  if (type) return res.status(type).json({ message });
  
  return res.status(201).json(message);
};

module.exports = {
  insertsSales,
};