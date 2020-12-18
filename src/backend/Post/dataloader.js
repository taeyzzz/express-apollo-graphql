const DataLoader = require("dataloader")

const Post = require("./index")

const dataLoaderListPostsByUsers = new DataLoader(Post.listPostsByUsers)

module.exports = {
  dataLoaderListPostsByUsers
}
