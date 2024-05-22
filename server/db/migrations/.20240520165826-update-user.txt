'use strict';

const { USER_TABLE } = require('../models/user.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(USER_TABLE, 'status',
      {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'activo',
    });
  },

  down: async (queryInterface) => {
    await queryInterface.changeColumn(USER_TABLE, 'status');
  }
};
