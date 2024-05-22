const { Model, DataTypes, Sequelize } = require('sequelize');

const { TAG_TABLE } = require('./tag.model');
const { PUBLICATION_TABLE } = require('./publication.model');

const TAG_PUBLICATION_TABLE = 'tags_publications';

const TagPublicationSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    field: 'created_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  tagId: {
    field: 'tag_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TAG_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
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
  }
}

class TagPublication extends Model {

  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TAG_PUBLICATION_TABLE,
      modelName: 'TagPublication',
      timestamps: false
    }
  }
}

module.exports = { TagPublication, TagPublicationSchema, TAG_PUBLICATION_TABLE };
