const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30).label('First Name');
const lastName = Joi.string().min(3).max(30).label('Last Name');
const ci = Joi.string().min(9).max(10);
const fingerprintCode = Joi.string();
const passport = Joi.string();
const birthdate = Joi.date();
const gender = Joi.string();
const civilStatus = Joi.string();
const disability = Joi.string();
const ethnicity = Joi.string();
//const birthdate = Joi.date().format('YYYY-MM-DD').utc();

const { createUserSchema, updateUserSchema } = require('./user.schema');
const { createAddressSchema, updateAddressSchema } = require('./address.schema');

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  birthdate: birthdate.required(),
  gender: gender.required(),
  civilStatus: civilStatus.required(),
  disability: disability.required(),
  ethnicity: ethnicity.required(),

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
  fingerprintCode,
  passport,
  birthdate,
  gender,
  civilStatus,
  disability,
  ethnicity,
  user: updateUserSchema,
  addressId: updateAddressSchema
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema };
