const express = require('express');

const CommentService = require('../services/comment.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createCommentSchema, getCommentSchema, updateCommentSchema } = require('../schemas/comment.schema');

const router = express.Router();
const service = new CommentService();

router.get(
  '/',
  async (req, res, next) => {
    try {
      const comments = await service.find();
      res.json(comments);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  validatorHandler(getCommentSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const comment = await service.findOne(id);
      res.json(comment);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createCommentSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newComments = await service.create(body);
      res.status(201).json(newComments);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getCommentSchema, 'params'),
  validatorHandler(updateCommentSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const comment = await service.update(id, body);
      res.json(comment);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getCommentSchema, 'params'),
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
