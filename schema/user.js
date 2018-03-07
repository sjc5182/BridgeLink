const graphql = require("graphql");
const { GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const User = new GraphQLObjectType({
  name: "User",
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(user) {
          return user.userid;
        }
      },
      userfirst: {
        type: GraphQLString,
        resolve(user) {
          return user.userfirst;
        }
      },
      usermiddle: {
        type: GraphQLString,
        resolve(user) {
          return user.usermiddle;
        }
      },
      userlast: {
        type: GraphQLString,
        resolve(user) {
          return user.userlast;
        }
      },
      accesscode: {
        type: GraphQLString,
        resolve(user) {
          return user.accesscode;
        }
      },
      email: {
        type: GraphQLString,
        resolve(user) {
          return user.email;
        }
      },
      password: {
        type: GraphQLString,
        resolve(user) {
          return user.password;
        }
      },
      creationdate: {
        type: GraphQLString,
        resolve(user) {
          return user.creationdate;
        }
      },
      company: {
        type: GraphQLList(Company),
        resolve(user) {
          return user.getCompany();
        }
      }
    };
  }
});

module.exports = User;
