const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    posts: [Post]
    post(id: Int!): Post
    users: [User]
    user(id: Int!): User
  }

  type User {
    id: ID!
    name: String
  }

  type Post {
    id: ID!
    title: String
    message: String
    author: User
  }

  type Mutation {
    addPost(message: String, title: String, author: Int): Post
  }
`;

module.exports = typeDefs;
