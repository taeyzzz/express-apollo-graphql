const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express')
const DataLoader = require("dataloader")

const typeDefs = require("./src/schema/types")
const resolvers = require("./src/schema/resolvers")
const context = require("./src/schema/context")

const PORT = process.env.PORT || 4000;
const GRAPHQL_PATH = process.env.GRAPHQL_PATH || '/graphql'

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
})

server.applyMiddleware({ app, path: GRAPHQL_PATH })

app.listen(PORT, () => console.info(`Server started on PORT ${PORT}`));
