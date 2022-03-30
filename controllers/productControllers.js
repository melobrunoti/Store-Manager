const productServices = require('../services/productServices');

const getAll = async (req, res) => {
  const products = await productServices.getAll();

  res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const products = await productServices.getById(id);

  res.status(200).json(products);
};

module.exports = {
  getAll,
  getById,
};