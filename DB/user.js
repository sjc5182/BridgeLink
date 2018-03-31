//const Faker = require('faker');
//const _ = require('lodash');
export default (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
    });
    User.associate = (models) => {
        User.belongsTo(models.Company, {
          foreignKey: 'companyTitle_id'
        });
      };

//     User.sync({ force: true }).then(() => {
//     _.times(10, () => {
//         return User.create({
//             username: Faker.name.firstName(),
//             email: Faker.internet.email()
//         });
//     });
// });
    return User;
};


