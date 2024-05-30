const { Model, DataTypes, Sequelize } = require('sequelize');

const ADDRESS_TABLE = 'addresses';

const AddressSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  country: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Ecuador',
  },
  province: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Cañar',
  },
  city: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'Azogues',
  },
  parish: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  primaryStreet: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  secondaryStreet: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  reference: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  number: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  zipcode: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  geolocation:{
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    field: 'create_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
}

class Address extends Model {
  static associate(models) {
    this.hasOne(models.Customer, {
      as: 'customer',
      foreignKey: 'addressId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ADDRESS_TABLE,
      modelName: 'Address',
      timestamps: false
    }
  }
}


module.exports = { ADDRESS_TABLE, AddressSchema, Address }
