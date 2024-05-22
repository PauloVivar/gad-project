const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } });
const password = Joi.string().min(5);
const role = Joi.string().min(5);;
const team = Joi.string().min(5);;
const avatar = Joi.string();
const status = Joi.string();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  // role: role.required(),
  // team: team.required(),
  //avatar: avatar.required(),
  //status: status.required(),
});

const updateUserSchema = Joi.object({
  email: email,
  role: role,
  team: team,
  avatar: avatar,
  status: status,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
