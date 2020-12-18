const DB = require("../../db/models")

const listAllPost = async () => {
  return DB.Post.findAll({ raw: true })
}

const getPost = async (id) => {
  return DB.Post.findByPk(id, { raw: true })
}

const createPost = async ({ title, message, authorId }) => {
  const createdPost = await DB.Post.create({ title, message, authorId })
  return createdPost;
}

const listUsersByPosts = async (ids) => {
  return DB.Post.findAll({ where: { authorId: ids }, raw: true })
}

module.exports = {
  listAllPost,
  getPost,
  createPost,
  listUsersByPosts
}
