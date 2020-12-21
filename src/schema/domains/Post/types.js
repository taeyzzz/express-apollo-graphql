const { gql } = require('apollo-server');

const typeDefs = gql`
  type Post {
    id: Int!
    title: String
    message: String
    author: User
  }
`;

module.exports = typeDefs;
