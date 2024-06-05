const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } });
const password = Joi.string().min(5);
const team = Joi.string().min(5);
const role = Joi.string().min(5);
const cellphone = Joi.string();
const phone = Joi.string();
const avatar = Joi.string();
const status = Joi.string();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  cellphone: cellphone.required(),
  avatar: avatar,
  // team: team.required(),
  // role: role.required(),
  //status: status.required(),
});

const updateUserSchema = Joi.object({
  email: email,
  team: team,
  role: role,
  cellphone: cellphone,
  phone: phone,
  avatar: avatar,
  status: status,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
