'use strict';

const { CUSTOMER_TABLE } = require('../models/customer.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'cc',
      {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'cc');
  }
};

