const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CommentService {

  constructor(){
  }

  async find() {
    const comments = await models.Comment.findAll();
    return comments;
  }

  async findOne(id) {
    const comment = await models.Comment.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user']
        },
        'items'
      ]
    });
    if (!comment) {
      throw boom.notFound('comentario no encontrado');
    }
    return comment;
  }

  async create(data) {
    const newComment = await models.Comment.create(data);
    return newComment;
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

module.exports = CommentService;
