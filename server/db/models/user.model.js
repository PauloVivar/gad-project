const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

//hola test

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer',
  },
  team: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'person',
  },
  avatar:{
    allowNull: true,
    type: DataTypes.STRING,
  },
  status:{
    allowNull: false,
    type: Sequelize.DataTypes.STRING,
    defaultValue: 'activo',
  },
  createdAt: {
    field: 'create_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  }
}

class User extends Model {
  static associate(models) {
    this.hasOne(models.Customer, {
      as: 'customer',
      foreignKey: 'userId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}


module.exports = { USER_TABLE, UserSchema, User }
