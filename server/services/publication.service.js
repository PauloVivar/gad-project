// const { faker } = require('@faker-js/faker');

const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class PublicationService {

  constructor(){
    this.publications = [];
    this.generate();
  }

  generate() {
    // const limit = 100;
    // for (let index = 0; index < limit; index++) {
    //   this.publications.push({
    //     id: faker.datatype.uuid(),
    //     name: faker.commerce.publicationName(),
    //     price: parseInt(faker.commerce.price(), 10),
    //     image: faker.image.imageUrl(),
    //     isBlock: faker.datatype.boolean(),
    //   });
    // }
  }

  async find(query) {
    const options = {
      include: ['customer', 'category'],
      where: {}
    }
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit =  limit;
      options.offset =  offset;
    }

    const publications = await models.Publication.findAll(options);
    return publications;
  }

  async findOne(id) {
    //const publication = this.publications.find(item => item.id === id);
    const publication = await models.Customer.findByPk(id, {
      include: ['customer', 'category'],                             //agregado por test
    });
    if (!publication) {
      throw boom.notFound('publicación no encontrada');
    }
    if (publication.status) {
      throw boom.conflict('publicación desactivada');
    }
    return publication;
  }

  async create(data) {
    const newPublication = await models.Publication.create(data, {
      include: ['customer', 'category']
    });
    return newPublication;
  }

  async update(id, changes) {
    // const index = this.publications.findIndex(item => item.id === id);
    // if (index === -1) {
    //   throw boom.notFound('publication not found');
    // }
    // const publication = this.publications[index];
    // this.publications[index] = {
    //   ...publication,
    //   ...changes
    // };
    // return this.publications[index];

    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;

  }

  async delete(id) {
    // const index = this.publications.findIndex(item => item.id === id);
    // if (index === -1) {
    //   throw boom.notFound('publication not found');
    // }
    // this.publications.splice(index, 1);
    // return { id };

    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }

}

module.exports = PublicationService;
