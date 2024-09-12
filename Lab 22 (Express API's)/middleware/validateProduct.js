const { celebrate, Joi, Segments } = require('celebrate');

const validateProduct = celebrate({
  [Segments.BODY]: Joi.object({
    name: Joi.string().max(100).required(),
    price: Joi.number().min(0).required(),
    category: Joi.string().required(),
    description: Joi.string().max(500),
    stock: Joi.number().min(0).required(),
    brand: Joi.string().required(),
    warranty: Joi.string().optional(),
    rating: Joi.number().min(0).max(5).optional(),
    isAvailable: Joi.boolean().optional(),
  }),
});

module.exports = validateProduct;
