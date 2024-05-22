const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30).label('First Name');
const lastName = Joi.string().min(3).max(30).label('Last Name');
const ci = Joi.string().min(9).max(10);
const cc = Joi.string();
const birthdate = Joi.date();
//const birthdate = Joi.date().format('YYYY-MM-DD').utc();
const gender = Joi.string();
const phone =  Joi.string();

// const userId = Joi.number().integer();
// const email = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } });
// const password = Joi.string().min(5);
// const addressId = Joi.number().integer();

const { createUserSchema, updateUserSchema } = require('./user.schema');
const { createAddressSchema, updateAddressSchema } = require('./address.schema');

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  ci: ci.required(),
  birthdate: birthdate.required(),
  gender: gender.required(),
  phone: phone.required(),

  //cc: cc.required(),
  // user: Joi.object({
  //   email: email.required(),
  //   password: password.required()
  // }),
  user: createUserSchema,
  address: createAddressSchema
});

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  ci,
  cc,
  birthdate,
  gender,
  phone,
  user: updateUserSchema,
  addressId: updateAddressSchema
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema };
