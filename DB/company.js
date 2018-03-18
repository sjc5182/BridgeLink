export default (sequelize, DataTypes) => {
  const Company = sequelize.define('company', {
    companyname: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  Company.associate = (models) => {
    Company.belongsTo(models.User, {
      foreignKey: 'companyTitle'
    });
  };

  return Company;
};