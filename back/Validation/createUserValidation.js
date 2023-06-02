const Joi = require('joi');
const { getNames } = require('country-list');

const countries = getNames();

const createUserValidation = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: true },
  }).required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  nationality: Joi.string().valid(...countries).required(),
  password: Joi.string()
  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
favorites: Joi.array().items(Joi.string()),
  photo: Joi.string().default('icon'),
});

module.exports = createUserValidation;
