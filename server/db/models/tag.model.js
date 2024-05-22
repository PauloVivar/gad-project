const { Model, DataTypes, Sequelize } = require('sequelize');
const { PUBLICATION_TABLE } = require('./publication.model');

const TAG_TABLE = 'tags';

const TagSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    field: 'created_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  publicationId: {
    field: 'publication_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PUBLICATION_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
}

class Tag extends Model {
  static associate(models) {
    this.belongsTo(models.Customer, {
      as: 'publication',
    });
    this.belongsToMany(models.Publication, {
      as: 'items',
      through: models.TagPublication,
      foreignKey: 'tagId',
      otherKey: 'publicationId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TAG_TABLE,
      modelName: 'Tag',
      timestamps: false
    }
  }
}

module.exports = { Tag, TagSchema, TAG_TABLE };
