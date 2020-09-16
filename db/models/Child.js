const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Child extends Model {}

Child.init(
  {
    childname: {
      type: DataTypes.STRING,
    },

    age: {
      type: DataTypes.STRING,
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
