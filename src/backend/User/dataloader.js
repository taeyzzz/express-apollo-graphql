const DataLoader = require("dataloader")

const User = require("./index")

const dataLoaderlistUsersByPosts = new DataLoader(User.listUsersByPosts)

module.exports = {
  dataLoaderlistUsersByPosts
}
