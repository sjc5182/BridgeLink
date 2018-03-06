module.exports = function(sequelize, sequelize) {
  return sequelize.define('company', {
    companyid: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    systemPreferenceid: {
      type: sequelize.INTEGER,
    },
    companyname: {
      type: sequelize.STRING,
      allowNull: true,
    },
    streetaddress: {
      type: sequelize.STRING,
      allowNull: true,
    },
    city: {
      type: sequelize.STRING,
      allowNull: true,
    },
    state: {
      type: sequelize.STRING,
      allowNull: true,
    },
    zipcode: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
    areacode: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
    phone: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
    fax: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
    email: {
      type: sequelize.STRING,
      allowNull: true,
    },
    // createdate: {
    //   type: sequelize.DATE,
    //   allowNull: true,
    // },
  });
}