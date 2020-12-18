const DB = require("../models")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await DB.User.bulkCreate([
      { name: "user1" },
      { name: "user2" },
      { name: "user3" },
    ])
    const preparedPosts = users.map((user, index) => {
      return {
        title: `title${index}`,
        message: `message${index}`,
        authorId: user.id
      }
    })
    return DB.Post.bulkCreate(preparedPosts)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
