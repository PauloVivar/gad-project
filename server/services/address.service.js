const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class AddressService {
  constructor() {}

  async find() {
    const rta = await models.Address.findAll({
      include: ['customer']
    });
    return rta;
  }

  async findOne(id) {
    const address = await models.Address.findByPk(id);
    if (!address) {
      throw boom.notFound('dirección no encontrada');
    }
    return address;
  }

  async create(data) {
    const newAddress = await models.Address.create(data);
    return newAddress;
  }

  async update(id, changes) {
    const address = await this.findOne(id);
    const rta = await address.update(changes);
    return rta;
  }

  async delete(id) {
    const address = await this.findOne(id);
    await address.destroy();
    return { id };
  }
}

module.exports = AddressService;
