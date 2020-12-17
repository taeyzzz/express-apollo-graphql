const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express')

// const schema = require("./src/schema")
const typeDefs = require("./src/schema/types")
const resolvers = require("./src/schema/resolvers")

const PORT = process.env.PORT || 4000;
const GRAPHQL_PATH = process.env.GRAPHQL_PATH || '/graphql'

const app = express();

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

const server = new ApolloServer({
  typeDefs,
  resolvers
  // schema
})

server.applyMiddleware({ app, path: GRAPHQL_PATH })

app.listen(PORT, () => console.info(`Server started on PORT ${PORT}`));
