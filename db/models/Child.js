const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Child extends Model {}

Child.init(
  {
    name: {
      type: DataTypes.STRING,
    },

    age: {
      type: DataTypes.INTEGER,
    },
    gender: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
  }
);

module.exports = Child;
