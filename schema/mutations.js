const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;
const Db = require("../DB/");

const Company = require('./company');
const User = require('./user');
const Product = require('./product');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addProduct: {
      type: Product,
      args: {
        productname: { type: GraphQLString },
        price: { type: GraphQLInt }
      },
      resolve(root, { productname, price }) {
        return Db.models.product.create({
          productname,
          price
        })
      }
    },
  }
});

module.exports = mutation;