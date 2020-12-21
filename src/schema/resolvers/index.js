const Mutation = require("../domains/Mutation/resolvers")
const Query = require("../domains/Query/resolvers")
const Post = require("../domains/Post/resolvers")
const User = require("../domains/User/resolvers")

module.exports = [
  Query,
  Post,
  User,
  Mutation,
]
