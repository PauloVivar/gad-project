const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CustomerService {

  constructor() {}

  async find() {
    const customers = await models.Customer.findAll({
      include: ['user', 'address']
    });
    return customers;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('cliente no encontrado');
    }
    return customer;
  }

  async create(data) {
    const newCustomer = await models.Customer.create(data, {
      include: ['user', 'address']
    });
    return newCustomer;
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

module.exports = CustomerService;
