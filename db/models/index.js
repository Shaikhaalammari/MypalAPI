const Message = require("./Message");
const User = require("./User");
const Child = require("./Child");
const Notification = require("./Notification");

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

Child.belongsToMany(Message, {
  through: Notification,
  foreignKey: "messageId",
});
Message.belongsToMany(Child, { through: Notification, foreignKey: "childId" });

module.exports = {
  User,
  Child,
  Message,
  Notification,
};
