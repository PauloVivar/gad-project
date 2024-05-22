const Joi = require('joi');

const id = Joi.number().integer();
const description = Joi.string();

const customerId = Joi.number().integer();
const publicationId = Joi.number().integer();

const createCommentSchema = Joi.object({
  description: description.required(),
  customerId: customerId.required(),
  publicationId: publicationId.required(),
});

const updateUserSchema = Joi.object({
  description: description,
  customerId: customerId,
  publicationId: publicationId,
});

const getCommentSchema = Joi.object({
  id: id.required(),
});


module.exports = { createCommentSchema, updateUserSchema, getCommentSchema };
