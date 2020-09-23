const Action = require("./Action");
const User = require("./User");
const Child = require("./Child");
const Message = require("./Message");

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

// Child.belongsToMany(Action, {
//   through: Message,
//   foreignKey: "actionId",
// });
// Action.belongsToMany(Child, { through: Message, foreignKey: "childId" });

Action.hasMany(Message, {
  as: "message",
  foreignKey: "actionId",
  allowNull: false,
});
Message.belongsTo(Action, {
  as: "action",
});

Child.hasMany(Message, {
  as: "message",
  foreignKey: "childId",
  allowNull: false,
});
Message.belongsTo(Child, {
  as: "child",
});

User.hasMany(Message, {
  as: "message",
  foreignKey: "userId",
  allowNull: false,
});
Message.belongsTo(User, {
  as: "user",
});

// 1 action has many messages
// 1 child has many messages
// 1 user has many messages

module.exports = {
  User,
  Child,
  Action,
  Message,
};
