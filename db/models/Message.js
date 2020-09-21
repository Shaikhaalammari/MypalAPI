const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Message extends Model {}

Message.init(
  {
    message: {
      type: DataTypes.STRING, //This will be the emotion name
    },
    image: {
      type: DataTypes.STRING, // This will be the emotions image
    },
  },
  {
    sequelize: db,
  }
);
module.exports = Message;
