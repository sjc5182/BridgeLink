const graphql = require("graphql");
const { GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const Company = require("./company");

const Product = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve(product) {
        return product.productid;
      }
    },
    name: {
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
    // company: {
    //   type: Company,
    //   resolve(product) {
    //     return product.getCompany();
    //   }
    // }
  })
});

module.exports = Product;
