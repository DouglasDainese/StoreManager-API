const saleService = require('../services');

const findSaleByIdController = async (req, res) => {
  const id = req.params;
  const { type, message } = await saleService.findSaleByIdService(id);
  if (type) return res.status(type).json({ message });
  
  return res.status(200).json(message);
};

const findAllSalesController = async (_req, res) => {
  const { type, message } = await saleService.findAllSalesService();
  if (type) return res.status(type).json({ message });
  
  return res.status(200).json(message);
};

const insertsSales = async (req, res) => {
  const { type, message } = await saleService.insertSales(req.body);
  if (type) return res.status(type).json({ message });
  
  return res.status(201).json(message);
};

const deleteSales = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await saleService.deleteSalesService(id);

  if (type) return res.status(type).json({ message });

  return res.status(204).json();
};

const updateSalesController = async (req, res) => {
  const { id } = req.params;
  Number(id);
  const { type, message } = await saleService.updateSalesService(id, req.body);
  if (type) { console.log(message); return res.status(type).json({ message }); }
  
  return res.status(200).json(message);
};

module.exports = {
  insertsSales,
  findSaleByIdController,
  findAllSalesController,
  deleteSales,
  updateSalesController,
};