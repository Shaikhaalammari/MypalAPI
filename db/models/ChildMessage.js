const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class ChildMessage extends Model {}

ChildMessage.init(
  {},
  {
    sequelize: db,
  }
);

module.exports = ChildMessage;
