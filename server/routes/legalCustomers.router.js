const express = require('express');

const LegalCustomerService = require('../services/legalCustomer.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createLegalCustomerSchema, getLegalCustomerSchema, updateLegalCustomerSchema } = require('../schemas/legalCustomer.schema');

const router = express.Router();
const service = new LegalCustomerService();

router.get('/',
  async (req, res, next) => {
  try {
    res.json(await service.find());
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getLegalCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const legalCustomer = await service.findOne(id);
      res.json(legalCustomer);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createLegalCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      res.status(201).json(await service.create(body));
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getLegalCustomerSchema, 'params'),
  validatorHandler(updateLegalCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      res.status(201).json(await service.update(id, body));
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getLegalCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(200).json(await service.delete(id));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
