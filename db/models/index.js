const Message = require("./Message");
const User = require("./User");
const Child = require("./Child");

// User.hasOne(Profile, { as: "profile", foreignKey: "userId" });

User.hasMany(Child, {
  as: "children",
  foreignKey: "userId",
  allowNull: false,
});

Child.belongsTo(User, {
  as: "user", // created by defualt
  // foreignKey: "userId",
});

module.exports = {
  User,
  Child,
  Message,
};

