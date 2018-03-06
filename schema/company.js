const graphql = require('graphql'); 
const { GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema, GraphQLNonNull } = graphql;
const Db = require ('../DB/');

const Company = new GraphQLObjectType({
    name: 'Company',
    fields: () => {
        return {
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
            user: {
                type: GraphQLList(User),
                resolve(company) {
                    return company.getUsers();
                }
            },
            product: {
                type: GraphQLList(Product),
                resolve(company) {
                    return company.getProducts();
                }
            }
        }
    }
});


const User = new GraphQLObjectType({
    name: 'User',
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
        }
    }
});

const Product = new GraphQLObjectType({
    name: 'Product',
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
        }
    }
});


const Query = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            company: {
                type: new GraphQLList(Company),
                args: {
                    id: { type: GraphQLInt },
                    name: { type: GraphQLString }
                },
                resolve(root, args) {
                    return Db.models.company.findAll({ where: args })
                }
            },
            user: {
                type: new GraphQLList(User),
                args: {
                    id: { type: GraphQLInt },
                    name: { type: GraphQLString }
                },
                resolve(root, args) {
                    return Db.models.user.findAll({ where: args })
                } 
            },
            product: {
                type: new GraphQLList(Product),
                args: {
                    id: { type: GraphQLInt },
                    name: { type: GraphQLString }
                },
                resolve(root, args) {
                    return Db.models.user.findAll({ where: args })
                } 
            },
        }
    }
}); 

const Schema = new GraphQLSchema({
    query: Query
});

module.exports = Schema;