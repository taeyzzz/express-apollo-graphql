const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: Int!
    username: String!
    name: String
    posts: [Post]
    jwt: String
  }
`;

module.exports = typeDefs;
