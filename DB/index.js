import Sequelize from 'sequelize';

//const Sequelize = require('sequelize');
const config = require('./config');
const Faker = require('faker');
const _ = require('lodash');

const sequelize = new Sequelize(
    'BLDB',
    config.user,
    config.password,
    {
        dialect: 'mysql',
        host: 'localhost',
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
    } 
);

const models = {
    User: sequelize.import('./user'),
    Company: sequelize.import('./company'),
};

Object.keys(models).forEach((modelName) => {
    if('associate' in models[modelName]){
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
// const Company = sequelize.define('company', {
//     companyid: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//     },
//     systemPreferenceid: {
//         type: Sequelize.INTEGER
//     },
//     companyname: {
//         type: Sequelize.STRING,
//         allowNull: true,
//     },
//     streetaddress: {
//         type: Sequelize.STRING,
//         allowNull: true,
//     },
//     city: {
//         type: Sequelize.STRING,
//         allowNull: true,
//     },
//     state: {
//         type: Sequelize.STRING,
//         allowNull: true,
//     },
//     zipcode: {
//         type: Sequelize.INTEGER,
//         allowNull: true,
//     },
//     areacode: {
//         type: Sequelize.INTEGER,
//         allowNull: true,
//     },
//     phone: {
//         type: Sequelize.INTEGER,
//         allowNull: true,
//     },
//     fax: {
//         type: Sequelize.INTEGER,
//         allowNull: true,
//     },
//     email: {
//         type: Sequelize.STRING,
//         allowNull: true,
//         validate: {
//             isEmail: true
//         }
//     },
//     creationdate: {
//         type: Sequelize.DATE,
//         allowNull: true
//     },
// });



// const Product = sequelize.define('product', {
//     productid: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     productname: {
//         type: Sequelize.STRING,
//         allowNull: true,
//     },
//     description: {
//         type: Sequelize.STRING,
//         allowNull: true,
//     },
//     code: {
//         type: Sequelize.STRING,
//         allowNull: true,
//     },
//     price: {
//         type: Sequelize.INTEGER,
//         allowNull: true
//     },
// });

// const OrderDetail = sequelize.define('orderdetail', {
//     orderdetailid: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     quantity: {
//         type: Sequelize.INTEGER,
//         allowNull: true
//     },
// });
// const PurchaseOrder = sequelize.define('purchaseorder', {
//     purchaseorderid: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     orderreference: {
//         type: Sequelize.STRING,
//         allowNull: true
//     },
//     orderdate: {
//         type: Sequelize.DATE,
//         allowNull: true
//     },
//     shippingdate: {
//         type: Sequelize.DATE,
//         allowNull: true
//     },
//     orderstatus: {
//         type: Sequelize.STRING,
//         allowNull: true
//     },
//     orderprice: {
//         type: Sequelize.INTEGER,
//         allowNull: true
//     },
// });

// //Company.hasMany(User);

 //User.belongsTo(Company, {foreignKey: 'name', targetKey: 'companyname'});
 //User.belongsTo(Company, {foreignKey: 'companyname'});
// //Company.hasMany(User, {as: 'accesscode'});
// //Company.hasMany(Product);
// //User.hasMany(PurchaseOrder);
// //OrderDetail.hasMany(Product);
// //PurchaseOrder.hasOne(OrderDetail);
// //OrderDetail.hasMany(Product);

// Company.sync({ force: true }).then(() => {
//     _.times(10, () => {
//         return Company.create({
//             companyname: Faker.company.companyName()

//         });
//     });
// });
//  User.sync({ force: true }).then(() => {
//     _.times(10, () => {
//         return User.create({
//             userfirst: Faker.name.firstName(),
//             email: Faker.internet.email()
//         });
//     });
// });


/* product: {
    type: new GraphQLList(Product),
    args: {
      id: { type: GraphQLInt },
      name: { type: GraphQLString }
    },
    resolve(root, args) {
      return Db.models.product.findAll({ where: args });
    }
  } */
//module.exports = sequelize;