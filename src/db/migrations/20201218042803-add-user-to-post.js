'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Posts', 'authorId', Sequelize.INTEGER );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Posts', 'authorId' );
  }
};
