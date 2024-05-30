'use strict';

const { USER_TABLE } = require('./../models/user.model');
const { CUSTOMER_TABLE } = require('./../models/customer.model');
const { ADDRESS_TABLE } = require('./../models/address.model');

const { CATEGORY_TABLE } = require('./../models/category.model');
const { PUBLICATION_TABLE } = require('../models/publication.model');
const { TAG_TABLE } = require('../models/tag.model');
const { TAG_PUBLICATION_TABLE } = require('../models/tag-publication.model');
const { COMMENT_TABLE } = require('../models/comment.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable(USER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      team: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'person',
      },
      role: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'customer',
      },
      cellphone: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      phone: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
      },
      avatar:{
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
      },
      status:{
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'activo',
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      }
    });

    await queryInterface.createTable(ADDRESS_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      country: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'Ecuador',
      },
      province: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'Cañar',
      },
      city: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'Azogues',
      },
      parish: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
      },
      primaryStreet: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      secondaryStreet: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
      },
      reference: {
        allowNull: true,
        type: Sequelize.DataTypes.TEXT,
      },
      number: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      zipcode: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
      },
      geolocation:{
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
      },
      createdAt: {
        field: 'create_at',
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
    });

    await queryInterface.createTable(CUSTOMER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      lastName: {
        field: 'last_name',
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      ci: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
      },
      fingerprintCode: {
        field: 'fingerprint_code',
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
      },
      passport: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
      },
      birthdate: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      gender: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      civilStatus: {
        field: 'civil_status',
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      disability: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      ethnicity: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
      userId: {
        field: 'user_id',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        unique: true,
        references: {
          model: USER_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      addressId: {
        field: 'address_id',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        unique: true,
        references: {
          model: ADDRESS_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    });

    await queryInterface.createTable(CATEGORY_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.DataTypes.STRING,
      },
      image: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
    });

    await queryInterface.createTable(PUBLICATION_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      image: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.DataTypes.TEXT,
      },
      status: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
      customerId: {
        field: 'customer_id',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
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
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: CATEGORY_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    });

    await queryInterface.createTable(TAG_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
      publicationId: {
        field: 'publication_id',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: PUBLICATION_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    });

    await queryInterface.createTable(TAG_PUBLICATION_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
      tagId: {
        field: 'tag_id',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
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
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: PUBLICATION_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    });

    await queryInterface.createTable(COMMENT_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: Sequelize.DataTypes.TEXT,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
      customerId: {
        field: 'customer_id',
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
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
        type: Sequelize.DataTypes.INTEGER,
        unique: true,
        references: {
          model: PUBLICATION_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(ADDRESS_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);

    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PUBLICATION_TABLE);
    await queryInterface.dropTable(TAG_TABLE);
    await queryInterface.dropTable(TAG_PUBLICATION_TABLE);
    await queryInterface.dropTable(COMMENT_TABLE);
  }
};
