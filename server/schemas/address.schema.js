const Joi = require('joi');

const id = Joi.number().integer();
const city = Joi.string();
const street = Joi.string();
const number = Joi.number().integer();
const zipcode = Joi.string();
const geolocation = Joi.string();

const createAddressSchema = Joi.object({
  city: city.required(),
  street: street.required(),
  // number: number.required(),
  // zipcode: zipcode.required(),
  // geolocation: geolocation.required(),
});

const updateAddressSchema = Joi.object({
  city: city,
  street: street,
  number: number,
  zipcode: zipcode,
  geolocation: geolocation,
});

const getAddressSchema = Joi.object({
  id: id.required(),
});

module.exports = { createAddressSchema, updateAddressSchema, getAddressSchema }
