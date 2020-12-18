const DB = require("../../db/models")

const listAllUser = async () => {
  return DB.User.findAll({ raw: true })
}

const getUser = async (id) => {
  return DB.User.findByPk(id, { raw: true })
}

const listUsersByPosts = async (ids) => {
  return DB.User.findAll({ where: { id: ids }, raw: true })
}

module.exports = {
  listAllUser,
  getUser,
  listUsersByPosts
}
