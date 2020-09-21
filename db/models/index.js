const Message = require("./Message");
const User = require("./User");
const Child = require("./Child");
const ChildMessage = require("./ChildMessage");

// User.hasOne(Profile, { as: "profile", foreignKey: "userId" });

User.hasMany(Child, {
  as: "children",
  foreignKey: "userId",
  allowNull: false,
});

Child.belongsTo(User, {
  as: "user",
  foreignKey: "userId",
});

Child.belongsToMany(Message, {
  through: ChildMessage,
  foreignKey: "messageId",
});
Message.belongsToMany(Child, { through: ChildMessage, foreignKey: "childId" });

module.exports = {
  User,
  Child,
  Message,
  ChildMessage,
};
