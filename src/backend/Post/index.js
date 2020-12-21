const DB = require("../../db/models")

const listAllPost = async () => {
  return DB.Post.findAll({ raw: true })
}

const getPost = async (id) => {
  return DB.Post.findByPk(id, { raw: true })
}

const getPostByIds = async (ids) => {
  return DB.Post.findAll({ where: { id: ids } , raw: true })
}

const createPost = async ({ title, message, authorId }) => {
  const createdPost = await DB.Post.create({ title, message, authorId })
  return createdPost;
}

const listPostsByUsers = async (ids) => {
  const users  = await DB.User.findAll({
    include: [DB.Post],
    where: {
      id: ids
    }
  })
  return users.map(userData => userData.Posts)
}

module.exports = {
  listAllPost,
  getPost,
  getPostByIds,
  createPost,
  listPostsByUsers
}
