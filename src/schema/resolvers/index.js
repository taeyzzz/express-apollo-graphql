const DB = require("../../db/models")
const Post = require("../../backend/Post")
const User = require("../../backend/User")

const resolvers = {
  Query: {
    posts: async () => {
      return Post.listAllPost()
    },
    post: async (_, { id }, context, info) => {
      return Post.getPost(id)
    },
    users: async () => {
      return User.listALlUser()
    },
    user: async (parent, { id }, context, info) => {
      return User.getUser(id)
    }
  },
  Post: {
    author: async (parent) => {
      return User.getUser(parent.authorId)
    }
  },
  Mutation: {
    addPost: async (_, { message, title, authorId }) => {
      const createdPost = await Post.createPost({ message, title, authorId })
      return createdPost
    }
  },
}

module.exports = resolvers
