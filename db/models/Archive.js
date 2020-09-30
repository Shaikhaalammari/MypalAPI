const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Archive extends Model {}

Archive.init(
  {},
  {
    sequelize: db,
  }
);

module.exports = Archive;
