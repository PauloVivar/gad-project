const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const publicationId = Joi.number().integer();

const tagId = Joi.number().integer();

const createTagSchema = Joi.object({
  name: name.required(),
  publicationId: publicationId.required(),

});

const updateTagSchema = Joi.object({
  name,
  publicationId
});

const getTagSchema = Joi.object({
  id: id.required(),
});

const addItemSchema = Joi.object({
  tagId: tagId.required(),
  publicationId: publicationId.required(),
});

module.exports = { createTagSchema, updateTagSchema, getTagSchema, addItemSchema };
