const DataLoader = require("dataloader")

const Post = require("./index")

const dataLoaderListPostsByUsers = new DataLoader(async (userIds) => {
  const posts = await Post.listPostsByUsers(userIds)
  return userIds.map(userId => posts.filter(post => post.authorId === userId))
})

module.exports = {
  dataLoaderListPostsByUsers
}
