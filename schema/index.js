const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const Query = require('./root-query');
const Mutation = require('./mutations');

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});