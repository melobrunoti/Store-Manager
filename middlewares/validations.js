const { productScheme } = require('../helpers/productScheme');
const { nameValidator } = require('../services/productService');

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

const nameVerifier = async (req, res, next) => {
  const { name } = req.body;
  const productExists = await nameValidator(name);

  if (productExists) {
    return res.status(409).json({ message: 'Product already exists' });
  }

  next();
};

module.exports = {
  validateProduct,
  nameVerifier,
};
