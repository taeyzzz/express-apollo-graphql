const DB = require("../../../db/models")
const Post = require("../../../backend/Post")
const User = require("../../../backend/User")
const Utils = require("../../../backend/Utils")

module.exports = {
  Query: {
    posts: async () => {
      return Post.listAllPost()
    },
    post: async (_, { id }, context, info) => {
      return context.loaders.dataLoaderListPostsByIds.load(id)
    },
    users: async () => {
      return User.listAllUser()
    },
    user: async (parent, { id }, context, info) => {
      return context.loaders.dataLoaderListUserByIds.load(id)
    },
    currentUser: async (parent, _, context, info) => {
      return null
    }
  },
}
