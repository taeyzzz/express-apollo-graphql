
const posts = [
  { id:1, title: "title1", message: "message1", author: 1, },
  { id:2, title: "title2", message: "message2", author: 2, },
  { id:3, title: "title3", message: "message3", author: 3, },
]

const users = [
  { id:1, name: "taey" },
  { id:2, name: "tkul" },
  { id:3, name: "thanetpon" },
]

const resolvers = {
  Query: {
    posts: () => posts,
    post: (_, { id }, context, info) => posts.find(x => x.id == id),
    users: () => users,
    user: (parent, { id }, context, info) => {
      return users.find(x => x.id == id)
    }
  },
  Mutation: {
    addPost: (_, { message, title, author }) => {
      let createdPost = {
        id: posts.length + 1,
        title,
        message,
        author
      }
      posts.push(createdPost)
      return createdPost
    }
  },
  Post: {
    author: (parent) => {
      return users.find(x => x.id == parent.author)
    }
  },
}

module.exports = resolvers
