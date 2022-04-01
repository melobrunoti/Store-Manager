const { productScheme } = require('../helpers/productScheme');

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

module.exports = {
  validateProduct,
};
