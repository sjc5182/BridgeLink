//const Faker = require('faker');
//const _ = require('lodash');
//var sequelizeModelFactory = require("sequelize-model-factory");
export default (sequelize, DataTypes) => {
  const Company = sequelize.define('company', {
    companyname: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  Company.associate = (models) => {
    Company.hasMany(models.User, {
      foreignKey: 'companyTitle_id'
    });
  };

//sequelizeModelFactory
  //  Company.sync({ force: true }).then(() => {
  //     _.times(10, () => {
  //         return Company.create({
              
  //             companyname: Faker.company.companyName(),
  //            // companyTitle_id: Faker.randomElement(pluck('id'))
  //           });
  //     });
  // });
  return Company;
};