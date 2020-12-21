module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'username', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });
    return queryInterface.addColumn('Users', 'password', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'username' );
    return queryInterface.removeColumn('Users', 'password' );
  }
};
