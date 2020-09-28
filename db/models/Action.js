const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Action extends Model {}

Action.init(
  {
    action: {
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
module.exports = Action;
//Action
