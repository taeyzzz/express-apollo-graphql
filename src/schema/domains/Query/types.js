const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    posts: [Post]
    post(id: Int!): Post
    users: [User]
    user(id: Int!): User
    currentUser: User
  }
`;

module.exports = typeDefs;
