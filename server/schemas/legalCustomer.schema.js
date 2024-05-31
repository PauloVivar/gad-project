const Joi = require('joi');

const id = Joi.number().integer();
const businessName = Joi.string().min(3).max(30).label('Business Name :)');
const tradename = Joi.string().min(3).max(30).label('Tradename');
const ruc = Joi.string().min(12).max(13);
const activityDate = Joi.date();
//const birthdate = Joi.date().format('YYYY-MM-DD').utc();

const { createUserSchema, updateUserSchema } = require('./user.schema');
const { createAddressSchema, updateAddressSchema } = require('./address.schema');

const createLegalCustomerSchema = Joi.object({
  businessName: businessName.required(),
  tradename: tradename.required(),
  ruc: ruc.required(),
  activityDate: activityDate.required(),

  // user: Joi.object({
  //   email: email.required(),
  //   password: password.required()
  // }),
  user: createUserSchema,
  address: createAddressSchema
});

const updateLegalCustomerSchema = Joi.object({
  businessName,
  tradename,
  ruc,
  activityDate,
  user: updateUserSchema,
  addressId: updateAddressSchema
});

const getLegalCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createLegalCustomerSchema, updateLegalCustomerSchema, getLegalCustomerSchema };
