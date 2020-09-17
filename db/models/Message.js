const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Message extends Model {}

Message.init(
  {
    message: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
  }
);
module.exports = Message;
