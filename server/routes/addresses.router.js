const express = require('express');

const AddressService = require('../services/address.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createAddressSchema, updateAddressSchema, getAddressSchema } = require('../schemas/address.schema');

const router = express.Router();
const service = new AddressService();

router.get('/',
  async (req, res, next) => {
    try {
      const addresses = await service.find();
      res.json(addresses);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  validatorHandler(getAddressSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const address = await service.findOne(id);
      res.json(address);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createAddressSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newAddress = await service.create(body);
      res.status(201).json(newAddress);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getAddressSchema, 'params'),
  validatorHandler(updateAddressSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const address = await service.update(id, body);
      res.json(address);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getAddressSchema, 'params'),
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

