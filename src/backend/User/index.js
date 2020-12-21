const DB = require("../../db/models")
const Utils = require("../Utils")

const listAllUser = async () => {
  return DB.User.findAll({ raw: true })
}

const getUser = async (id) => {
  return DB.User.findByPk(id, { raw: true })
}

const login = async (username, password) => {
  const userData = await DB.User.findOne({
    where: {
      username
    },
    raw: true
  })
  if(!userData) throw new Error("Not found")
  const verified = await Utils.verifyPassword(password, userData.password)
  if(!verified) throw new Error("Password is not match.")
  return {
    id: userData.id,
    name: userData.name,
    username: userData.username
  }
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
  login
}
