/* credits https://www.youtube.com/watch?v=vcY0VuL5MM4&ab_channel=RuiWang */
const Joi = require('joi');

const salesScheme = Joi.object({
  productId: Joi.number().required(),
  quantity: Joi.number().min(1).required(),
});

module.exports = { salesScheme };