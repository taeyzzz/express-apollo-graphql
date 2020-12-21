const DataLoader = require("dataloader")

const User = require("./index")

const dataLoaderListUserByPosts = new DataLoader(User.listUsersByPosts)
const dataLoaderListUserByIds = new DataLoader(User.getUserByIds)

module.exports = {
  dataLoaderListUserByPosts,
  dataLoaderListUserByIds
}
