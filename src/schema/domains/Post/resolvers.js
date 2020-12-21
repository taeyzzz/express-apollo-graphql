const DB = require("../../../db/models")
const Post = require("../../../backend/Post")
const User = require("../../../backend/User")
const Utils = require("../../../backend/Utils")

module.exports = {
  Post: {
    author: async (parent, args, context) => {
      return context.loaders.dataLoaderListUserByPosts.load(parent.authorId)
    }
  },
}
