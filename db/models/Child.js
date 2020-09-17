const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Child extends Model { }

Child.init(
  {
    // rename to `name`
    // you already know it's the child's name, this is the Child model
    childname: {
      type: DataTypes.STRING,
    },
    age: {
      // age is a string?
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
