const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class TagService {

  constructor(){
  }

  async find() {
    const tags = await models.Tag.findAll();
    return tags;
  }

  // async findOne(id) {
  //   const tag = await models.Tag.findByPk(id, {
  //     include: [
  //       {
  //         association: 'customer',
  //         include: ['user']
  //       },
  //       'items'
  //     ]
  //   });
  //   return tag;
  // }

  async findOne(id) {
    const tag = await models.Tag.findByPk(id, {
      include: ['publication', 'items']
    });
    if (!tag) {
      throw boom.notFound('etiqueta no encontrada');
    }
    return tag;
  }

  async create(data) {
    const newTag = await models.Tag.create(data);
    return newTag;
  }

  async addItem(data) {
    const newItem = await models.TagPublication.create(data);
    return newItem;
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

module.exports = TagService;
