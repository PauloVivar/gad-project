const express = require('express');

const TagService = require('../services/tag.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createTagSchema, updateTagSchema, getTagSchema, addItemSchema } = require('../schemas/tag.schema');

const router = express.Router();
const service = new TagService();

router.get(
  '/',
  async (req, res, next) => {
    try {
      const tags = await service.find();
      res.json(tags);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  validatorHandler(getTagSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const tag = await service.findOne(id);
      res.json(tag);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createTagSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newTag = await service.create(body);
      res.status(201).json(newTag);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/add-item',
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newItem = await service.addItem(body);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getTagSchema, 'params'),
  validatorHandler(updateTagSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const tag = await service.update(id, body);
      res.json(tag);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getTagSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
