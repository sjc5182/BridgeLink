const config = {
  name: "BridgeLink",
  user: "root",
  password: "Shiguang1207$",
  options:   {
    dialect: 'mysql',
    host: 'localhost',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  }
}

module.exports = config;