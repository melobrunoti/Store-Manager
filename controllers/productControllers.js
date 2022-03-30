const productServices = require('../services/productServices');

const getAll = async (req, res) => {
  const products = await productServices.getAll();

  res.status(200).json(products);
};

module.exports = {
  getAll,
};