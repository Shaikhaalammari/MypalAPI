const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Message extends Model {}

Message.init(
  {
    message: {
      type: DataTypes.STRING, //This will be the emotion name
    },
  },
  {
    sequelize: db,
  }
);

module.exports = Message;
