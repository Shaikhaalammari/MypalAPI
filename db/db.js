const { Sequelize } = require("sequelize");

const db = new Sequelize({
  username: "postgres",
  password: "pinksummer",
  database: "mypal_db",
  dialect: "postgres",
  host: "localhost",

  // dialect: "sqlite",
  // storage: "my_db.db",
  logging: false,
});

module.exports = db;
