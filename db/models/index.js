const User = require("./User");
const Child = require("./Child");

// User.hasOne(Profile, { as: "profile", foreignKey: "userId" });

User.hasMany(Child, {
  as: "children",
  foreignKey: "userId", // can't have a foreignkey here, since a user has many children
  allowNull: false,
});

Child.belongsTo(User, {
  as: "user",
  foreignKey: "userId", // should be "childId"
});

module.exports = {
  User,
  Child,
};
