const graphql = require("graphql");
const {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull
} = graphql;
const Db = require("../DB/");

const Company = require('./company');
const User = require('./user');
const Product = require('./product');

const Query = new GraphQLObjectType({
  name: "Query",
  fields: () => {
    return {
      company: {
        type: new GraphQLList(Company),
        args: {
          id: { type: GraphQLInt },
          name: { type: GraphQLString }
        },
        resolve(root, args) {
          return Db.models.company.findAll({ where: args });
        }
      },
      user: {
        type: new GraphQLList(User),
        args: {
          id: { type: GraphQLInt },
          name: { type: GraphQLString }
        },
        resolve(root, args) {
          return Db.models.user.findAll({ where: args });
        }
      },
      product: {
        type: new GraphQLList(Product),
        args: {
          id: { type: GraphQLInt },
          name: { type: GraphQLString }
        },
        resolve(root, args) {
          return Db.models.user.findAll({ where: args });
        }
      }
    };
  }
});

module.exports = Query;
