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
        password: {
            type: DataTypes.STRING,
        },
    });

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


