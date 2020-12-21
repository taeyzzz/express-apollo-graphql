const DB = require("../../db/models")
const Post = require("../../backend/Post")
const User = require("../../backend/User")
const Utils = require("../../backend/Utils")

const resolvers = {
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
    }
  },
  User: {
    posts: async (parent, args, context) => {
      return context.loaders.dataLoaderListPostsByUsers.load(parent.id)
    }
  },
  Post: {
    author: async (parent, args, context) => {
      return context.loaders.dataLoaderListUserByPosts.load(parent.authorId)
    }
  },
  Mutation: {
    addPost: async (_, { message, title, authorId }) => {
      const createdPost = await Post.createPost({ message, title, authorId })
      return createdPost
    },
    registerUser: async (_, { username, password, name }) => {
      const hashResult = await Utils.hashPassword(password)
      const createdUser = await User.createUser({ username, password: hashResult, name })
      return createdUser
    }
  },
}

module.exports = resolvers
