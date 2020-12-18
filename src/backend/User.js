const DB = require("../db/models")

const listALlUser = async () => {
  return DB.User.findAll({ raw: true })
}

const getUser = async (id) => {
  return DB.User.findByPk(id, { raw: true })
}

const usersByPosts = async (ids) => {
  return DB.User.findAll({ where: { id: ids }, raw: true })
}

module.exports = {
  listALlUser,
  getUser,
  usersByPosts
}
