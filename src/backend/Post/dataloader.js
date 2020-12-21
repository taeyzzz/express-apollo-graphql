const DataLoader = require("dataloader")

const Post = require("./index")

const dataLoaderListPostsByUsers = new DataLoader(Post.listPostsByUsers)
const dataLoaderListPostsByIds = new DataLoader(Post.getPostByIds)

module.exports = {
  dataLoaderListPostsByUsers,
  dataLoaderListPostsByIds
}
