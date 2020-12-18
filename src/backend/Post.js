const DB = require("../db/models")

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

module.exports = {
  listAllPost,
  getPost,
  createPost
}
