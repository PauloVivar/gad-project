const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const bcrypt = require('bcrypt');

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
    const hash = await bcrypt.hash(data.user.password, 10);
    const newData = {
      ...data,
      user: {
        ...data.user,
        password: hash
      }
    }
    const newLegalCustomer = await models.LegalCustomer.create(newData, {
      include: ['user', 'address']
    });
    delete newLegalCustomer.dataValues.user.dataValues.password;
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
