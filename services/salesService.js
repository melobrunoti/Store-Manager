const salesModel = require('../models/salesModel');
/* const { validate } = require('../middlewares/validations'); */

const getAll = async () => {
  const products = await salesModel.getAll();

  return products;
};

const getById = async (id) => {
  const product = await salesModel.getById(id);

  return product;
};

const createSale = async (items) => {
  const sales = await salesModel.createSale(items);
  if (!sales) {
    return false;
  }

  return sales;
};

const updateSale = async (items, id) => {
  const sales = await salesModel.updateSale(items, id);
  if (!sales) {
    return false;
  }

  return sales;
};
module.exports = {
  getAll,
  getById,
  createSale,
  updateSale,
};