const ProductModel = require('../models/productModel');

const getAll = async () => {
  const products = await ProductModel.getAll();

  return products;
};

const getById = async (id) => {
  const product = await ProductModel.getById(id);

  return product;
};

const createProduct = async ({ name, quantity }) => {
  const newProduct = await ProductModel.createProduct({ name, quantity });
  if (!newProduct) {
    return false;
  }
  return newProduct;
};

module.exports = {
  getAll,
  getById,
  createProduct,
};