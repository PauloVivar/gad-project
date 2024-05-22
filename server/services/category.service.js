const boom = require('@hapi/boom');
const { models }= require('./../libs/sequelize');

class CategoryService {

  constructor(){
  }

  async find() {
    const categories = await models.Category.findAll();
    return categories;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {
      include: ['publications']
    });
    if (!category) {
      throw boom.notFound('categoría no encontrado');
    }
    return category;
  }

  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
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

module.exports = CategoryService;
