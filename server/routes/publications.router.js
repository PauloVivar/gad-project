const express = require('express');

const PublicationsService = require('../services/publication.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createPublicationSchema, getPublicationSchema, updatePublicationSchema, queryPublicationSchema } = require('../schemas/publication.schema');

const router = express.Router();
const service = new PublicationsService();

router.get('/',
  validatorHandler(queryPublicationSchema, 'query'),
  async (req, res, next) => {
    try {
      const publications = await service.find(req.query);
      res.json(publications);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id',
  validatorHandler(getPublicationSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const publication = await service.findOne(id);
      res.json(publication);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createPublicationSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPublication = await service.create(body);
      res.status(201).json(newPublication);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getPublicationSchema, 'params'),
  validatorHandler(updatePublicationSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const publication = await service.update(id, body);
      res.json(publication);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getPublicationSchema, 'params'),
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
