const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./user.model');
const { ADDRESS_TABLE } = require('./address.model');

const LEGAL_CUSTOMER_TABLE = 'legalCustomers';

const LegalCustomerSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  businessName: {
    field: 'business_name',
    allowNull: false,
    type: DataTypes.STRING,
  },
  tradename: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  ruc: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  activityDate: {
    field: 'activity_date',
    allowNull: false,
    type: Sequelize.DataTypes.DATE,
  },
  createdAt: {
    field: 'created_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
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
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: ADDRESS_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
}

class LegalCustomer extends Model {

  static associate(models) {
    this.belongsTo(models.User, {as: 'user'});
    this.belongsTo(models.Address, {as: 'address'});
    this.hasMany(models.Publication, {
      as: 'publication',
      foreignKey: 'legalCustomerId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: LEGAL_CUSTOMER_TABLE,
      modelName: 'LegalCustomer',
      timestamps: false
    }
  }
}

module.exports = { LegalCustomer, LegalCustomerSchema, LEGAL_CUSTOMER_TABLE };
