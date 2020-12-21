const { gql } = require('apollo-server');

const typeDefs = gql`
  type Mutation {
    addPost(message: String, title: String, authorId: Int): Post
    registerUser(username: String!, password: String!, name: String): User
    login(username: String!, password: String!): User
  }
`;

module.exports = typeDefs;
