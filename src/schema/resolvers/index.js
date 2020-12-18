const DB = require("../../db/models")

const resolvers = {
  Query: {
    posts: async () => {
      return DB.Post.findAll({ raw: true })
    },
    post: async (_, { id }, context, info) => {
      return DB.Post.findOne({ where: { id }, raw: true })
    },
    users: async () => {
      return DB.User.findAll({ raw: true })
    },
    user: async (parent, { id }, context, info) => {
      return DB.User.findAll({ where: { id }, raw: true })
    }
  },
  Post: {
    author: async (parent) => {
      return DB.User.findOne({ where: { id: parent.authorId }, raw: true })
    }
  },
  Mutation: {
    addPost: async (_, { message, title, authorId }) => {
      const createdPost = await DB.Post.create({ title, message, authorId })
      return createdPost
    }
  },
}

module.exports = resolvers
