const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Notification extends Model {}

Notification.init(
  {},
  {
    sequelize: db,
  }
);

module.exports = Notification;
