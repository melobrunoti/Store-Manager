const { productScheme } = require('../helpers/productScheme');
const { salesScheme } = require('../helpers/salesScheme');
const { nameValidator, verifyQuantity } = require('../services/productService');
  
const validateProduct = (req, res, next) => {
  const { error } = productScheme.validate(req.body);

  if (error) {
    if (error.message.includes('required')) {
      return res.status(400).json({ message: error.message });
    }
      return res.status(422).json({ message: error.message });
  }
  next();
};

const saleValidate = (req, res, next) => {
  const { error } = salesScheme.validate(req.body[0]);

  if (error) {
    if (error.message.includes('required')) {
      return res.status(400).json({ message: error.message });
    }
      return res.status(422).json({ message: error.message });
  }
  next();
};

const nameVerifier = async (req, res, next) => {
  const { name } = req.body;
  const productExists = await nameValidator(name);

  if (productExists) {
    return res.status(409).json({ message: 'Product already exists' });
  }

  next();
};

const quantityVerifier = async (req, res, next) => {
  const items = req.body;
  const isValid = await Promise.all(items.map((product) => verifyQuantity(product)));
  if (isValid.some((quantity) => quantity === false)) {
    return res.status(422).json({ message: 'Such amount is not permitted to sell' });
  }
  next();
};
module.exports = {
  validateProduct,
  nameVerifier,
  saleValidate,
  quantityVerifier,
};
