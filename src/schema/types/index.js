const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    posts: [Post]
    post(id: Int!): Post
    users: [User]
    user(id: Int!): User
  }

  type User {
    id: Int!
    username: String!
    name: String
    posts: [Post]
  }

  type Post {
    id: Int!
    title: String
    message: String
    author: User
  }

  type Mutation {
    addPost(message: String, title: String, authorId: Int): Post
    registerUser(username: String!, password: String!, name: String): User
    login(username: String!, password: String!): User
  }
`;

module.exports = typeDefs;
