const graphql = require("graphql");
const { GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLList } = graphql;
const Db = require("../DB/");

const Product = new GraphQLObjectType({
  name: "Product",
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(product) {
          return product.productid;
        }
      },
      accesscode: {
        type: GraphQLString,
        resolve(product) {
          return product.productname;
        }
      },
      description: {
        type: GraphQLString,
        resolve(product) {
          return product.description;
        }
      },
      code: {
        type: GraphQLString,
        resolve(product) {
          return product.code;
        }
      },
      price: {
        type: GraphQLString,
        resolve(product) {
          return product.price;
        }
      },
      Company: {
        type: GraphQLList(Company),
        resolve(product) {
          return product.getCompany();
        }
      }
    };
  }
});

module.exports = Product;
