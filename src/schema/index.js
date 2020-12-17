const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    posts: [Post]
    post: Post
    users: [User]
    user: User
  }

  type User {
    id: ID!
    name: String
  }

  type Post {
    id: ID!
    title: String
    message: String
    author: Int
  }
`;

module.exports = typeDefs;
