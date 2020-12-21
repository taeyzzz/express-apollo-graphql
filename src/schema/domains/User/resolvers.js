const DB = require("../../../db/models")
const Post = require("../../../backend/Post")
const User = require("../../../backend/User")
const Utils = require("../../../backend/Utils")

module.exports = {
  User: {
    posts: async (parent, args, context) => {
      return context.loaders.dataLoaderListPostsByUsers.load(parent.id)
    }
  },
}
