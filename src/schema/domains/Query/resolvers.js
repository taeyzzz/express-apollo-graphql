const { combineResolvers } = require('graphql-resolvers')

const ensureAuthenticated = require("../../resolvers/middlewares/ensureAuthenticated")

const DB = require("../../../db/models")
const Post = require("../../../backend/Post")
const User = require("../../../backend/User")
const Utils = require("../../../backend/Utils")

module.exports = {
  Query: {
    posts: combineResolvers(ensureAuthenticated, async () => {
      return Post.listAllPost()
    }),
    post: combineResolvers(ensureAuthenticated, async (_, { id }, context, info) => {
      return context.loaders.dataLoaderListPostsByIds.load(id)
    }),
    users: combineResolvers(ensureAuthenticated, async () => {
      return User.listAllUser()
    }),
    user: combineResolvers(ensureAuthenticated, async (parent, { id }, context, info) => {
      return context.loaders.dataLoaderListUserByIds.load(id)
    }),
    currentUser: combineResolvers(ensureAuthenticated, async (parent, _, { currentUser }, info) => {
      return currentUser
    })
  },
}
