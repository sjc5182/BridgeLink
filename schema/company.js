const graphql = require("graphql");
const { GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const User = require("./user");
const Product = require("./product");

const Company = new GraphQLObjectType({
  name: "Company",
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve(company) {
        return company.companyid;
      }
    },
    name: {
      type: GraphQLString,
      resolve(company) {
        return company.companyname;
      }
    },
    streetaddress: {
      type: GraphQLString,
      resolve(company) {
        return company.streetaddress;
      }
    },
    city: {
      type: GraphQLString,
      resolve(company) {
        return company.city;
      }
    },
    state: {
      type: GraphQLString,
      resolve(company) {
        return company.state;
      }
    },
    zipcode: {
      type: GraphQLInt,
      resolve(company) {
        return company.zipcode;
      }
    },
    areacode: {
      type: GraphQLInt,
      resolve(company) {
        return company.areacode;
      }
    },
    phone: {
      type: GraphQLInt,
      resolve(company) {
        return company.phone;
      }
    },
    fax: {
      type: GraphQLInt,
      resolve(company) {
        return company.fax;
      }
    },
    email: {
      type: GraphQLString,
      resolve(company) {
        return company.email;
      }
    },
    createdate: {
      type: GraphQLString,
      resolve(company) {
        return company.creationdate;
      }
    },
    // user: {
    //   type: GraphQLList(User),
    //   resolve(company) {
    //     return company.getUsers();
    //   }
    // },
    // product: {
    //   type: GraphQLList(Product),
    //   resolve(company) {
    //     return company.getProducts();
    //   }
    // }
  })
});

module.exports = Company;
