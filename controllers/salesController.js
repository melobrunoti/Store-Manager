const salesService = require('../services/salesService');

const getAll = async (req, res) => {
  const sales = await salesService.getAll();

  res.status(200).json(sales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.getById(id);
  
  if (!sale || sale.length === 0) return res.status(404).json({ message: 'Sale not found' });

  res.status(200).json(sale);
};

const createSale = async (req, res) => {
  const sale = await salesService.createSale(req.body);

  res.status(201).json(sale);
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.updateSale(req.body, id);

  res.status(200).json(sale);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const deletedSale = await salesService.deleteSale(id);
  if (!deletedSale) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  res.status(204).end();
};
module.exports = {
  getAll,
  getById,
  createSale,
  updateSale,
  deleteSale,
};