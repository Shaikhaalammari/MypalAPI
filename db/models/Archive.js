const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Archive extends Model {}

Archive.init(
  {
    archive: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
  }
);

module.exports = Archive;
