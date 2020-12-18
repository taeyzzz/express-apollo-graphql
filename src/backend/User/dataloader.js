const DataLoader = require("dataloader")

const User = require("./index")

const dataLoaderListUserByPosts = new DataLoader(User.listUsersByPosts)

module.exports = {
  dataLoaderListUserByPosts
}
