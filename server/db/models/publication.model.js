const { Model, DataTypes, Sequelize } = require('sequelize');

const { CUSTOMER_TABLE } = require('./customer.model');
const { CATEGORY_TABLE } = require('./category.model');

const PUBLICATION_TABLE = 'publications';

const PublicationSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
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
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
}

class Publication extends Model {

  static associate(models) {
    this.belongsTo(models.Customer, { as: 'customer' });
    this.belongsTo(models.Category, { as: 'category' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PUBLICATION_TABLE,
      modelName: 'Publication',
      timestamps: false
    }
  }
}

module.exports = { Publication, PublicationSchema, PUBLICATION_TABLE };
