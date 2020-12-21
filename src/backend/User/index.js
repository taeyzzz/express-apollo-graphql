const DB = require("../../db/models")

const listAllUser = async () => {
  return DB.User.findAll({ raw: true })
}

const getUser = async (id) => {
  return DB.User.findByPk(id, { raw: true })
}

const getUserByUsername = async (username) => {
  const userData = await DB.User.findOne({
    where: {
      username
    },
    raw: true
  })
  if(!userData) throw new Error("Not found")
  return userData
}

const getUserByIds = async (ids) => {
  return DB.User.findAll({ where: { id: ids } , raw: true })
}

const listUsersByPosts = async (ids) => {
  return DB.User.findAll({ where: { id: ids }, raw: true })
}

const createUser = async ({ username, password, name }) => {
  const createdUser = await DB.User.create({ username, password, name })
  return createdUser
}

module.exports = {
  listAllUser,
  getUser,
  getUserByIds,
  listUsersByPosts,
  createUser,
  getUserByUsername
}
