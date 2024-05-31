const Joi = require('joi');

const id = Joi.number().integer();
const country = Joi.string();
const province = Joi.string();
const city = Joi.string();
const parish = Joi.string();
const primaryStreet = Joi.string();
const secondaryStreet = Joi.string();
const reference = Joi.string();
const number = Joi.number().integer();
const zipcode = Joi.string();
const geolocation = Joi.string();

const createAddressSchema = Joi.object({
  primaryStreet: primaryStreet.required(),
  // number: number.required(),
  // zipcode: zipcode.required(),
  // geolocation: geolocation.required(),
});

const updateAddressSchema = Joi.object({
  country: country,
  city: city,
  province: province,
  parish: parish,
  primaryStreet: primaryStreet,
  secondaryStreet: secondaryStreet,
  reference: reference,
  number: number,
  zipcode: zipcode,
  geolocation: geolocation,
});

const getAddressSchema = Joi.object({
  id: id.required(),
});

module.exports = { createAddressSchema, updateAddressSchema, getAddressSchema }
