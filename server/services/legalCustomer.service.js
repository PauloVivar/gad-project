const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class LegalCustomerService {

  constructor() {}

  async find() {
    const legalCustomers = await models.LegalCustomer.findAll({
      include: ['user', 'address']
    });
    return legalCustomers;
  }

  async findOne(id) {
    const legalCustomer = await models.LegalCustomer.findByPk(id);
    if (!legalCustomer) {
      throw boom.notFound('Persona Legal no encontrada');
    }
    return legalCustomer;
  }

  async create(data) {
    const newLegalCustomer = await models.LegalCustomer.create(data, {
      include: ['user', 'address']
    });
    return newLegalCustomer;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }

}

module.exports = LegalCustomerService;
