const { Sequelize } = require("sequelize");

const db = new Sequelize({
  username: "postgres",
  password: "shaikha19", // im so gonna hack you everywhere 
  database: "Mypal",
  dialect: "postgres",
  host: "localhost",

  logging: false,
});

module.exports = db;
