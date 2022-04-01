/* credits https://www.youtube.com/watch?v=vcY0VuL5MM4&ab_channel=RuiWang */
const Joi = require('joi');

const productScheme = Joi.object({
  name: Joi.string().min(5).required(),
  quantity: Joi.number().min(1).required(),
});

module.exports = { productScheme };