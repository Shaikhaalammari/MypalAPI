const Action = require("./Action");
const Archive = require("./Archive");
const Child = require("./Child");
const Message = require("./Message");
const User = require("./User");

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

Action.hasMany(Message, {
  as: "messages",
  // foreignKey: "actionId",
});
Message.belongsTo(Action, {
  as: "actions",
});

Child.hasMany(Message, {
  as: "messages",
  // foreignKey: "childId",
});
Message.belongsTo(Child, {
  as: "children",
});

User.hasMany(Message, {
  as: "messages",
  // foreignKey: "userId",
});
Message.belongsTo(User, {
  as: "users",
});

Archive.hasMany(Message, { as: "messages" });
Message.belongsTo(Archive, { as: "archives" });

module.exports = {
  Action,
  Archive,
  Child,
  Message,
  User,
};
