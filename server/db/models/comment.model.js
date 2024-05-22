const { Model, DataTypes, Sequelize } = require('sequelize');
const { CUSTOMER_TABLE } = require('./customer.model');
const { PUBLICATION_TABLE } = require('./publication.model');

const COMMENT_TABLE = 'comments';

const CommentSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  createdAt: {
    field: 'created_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  publicationId: {
    field: 'publication_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: PUBLICATION_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },

  // total: {
  //   type: DataTypes.VIRTUAL,
  //   get() {
  //     if (this.items && this.items.length > 0) {
  //       return this.items.reduce((total, item) => {
  //         return total + (item.price * item.OrderProduct.amount);
  //       }, 0);
  //     }
  //     return 0;
  //   }
  // }
}

class Comment extends Model {

  static associate(models) {
    this.belongsTo(models.Customer, { as: 'customer' });
    this.belongsTo(models.Publication, { as: 'publication' });

    // this.belongsToMany(models.Product, {
    //   as: 'items',
    //   through: models.OrderProduct,
    //   foreignKey: 'orderId',
    //   otherKey: 'productId'
    // });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COMMENT_TABLE,
      modelName: 'Comment',
      timestamps: false
    }
  }
}

module.exports = { Comment, CommentSchema, COMMENT_TABLE };
