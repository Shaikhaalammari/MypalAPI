const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Message extends Model {}

Message.init(
  {},
  {
    sequelize: db,
  }
);

module.exports = Message;
