const DataLoader = require("dataloader")

const Post = require("./index")

const dataLoaderlistUsersByPosts = new DataLoader(async (userIds) => {
  const posts = await Post.listUsersByPosts(userIds)
  return userIds.map(userId => posts.filter(post => post.authorId === userId))
})

module.exports = {
  dataLoaderlistUsersByPosts
}
