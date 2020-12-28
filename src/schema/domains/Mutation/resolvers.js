const { combineResolvers } = require('graphql-resolvers')

const ensureAuthenticated = require("../../resolvers/middlewares/ensureAuthenticated")

const DB = require("../../../db/models")
const Post = require("../../../backend/Post")
const User = require("../../../backend/User")
const Utils = require("../../../backend/Utils")

module.exports = {
  Mutation: {
    addPost: combineResolvers(ensureAuthenticated, async (_, { message, title, authorId }) => {
      return Post.createPost({ message, title, authorId })
    }),
    registerUser: async (_, { username, password, name }) => {
      const hashResult = await Utils.hashPassword(password)
      return User.createUser({ username, password: hashResult, name })
    },
    login: async (_, { username, password }) => {
      const userData = await User.login(username, password)
      const token = await Utils.jwtSign(userData)
      return {
        jwt: token,
        ...userData
      }
    }
  },
}
