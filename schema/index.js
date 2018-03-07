const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const query = require('./root-query');

module.exports = new GraphQLSchema({
  query
});