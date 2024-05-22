const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string().min(3).max(15);
const image = Joi.string().uri();
const description = Joi.string().min(10);
const status = Joi.string().default('activo');

const limit = Joi.number().integer();
const offset = Joi.number().integer();

// const userId = Joi.number().integer();
// const categoryId = Joi.number().integer();
const { createCustomerSchema, updateCustomerSchema } = require('./customer.schema');
const { createCategorySchema, updateCategorySchema } = require('./category.schema');

const createPublicationSchema = Joi.object({
  title: title.required(),
  image: image.required(),
  description: description.required(),

  // userId: userId.required(),
  customer: createCustomerSchema,
  category: createCategorySchema,
});

const updatePublicationSchema = Joi.object({
  title: title,
  image: image,
  description: description,
  status: status,

  // customerId: customerId,
  customer: updateCustomerSchema,
  category: updateCategorySchema,
});

const getPublicationSchema = Joi.object({
  id: id.required(),
});

const queryPublicationSchema = Joi.object({
  limit,
  offset,
});

module.exports = { createPublicationSchema, updatePublicationSchema, getPublicationSchema, queryPublicationSchema }
