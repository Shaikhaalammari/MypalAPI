//data
const { Message, User, Child } = require("../db/models");

exports.fetchMessage = async (messageId, next) => {
  try {
    const message = await Message.findByPk(messageId);
    return message;
  } catch (error) {
    next(error);
  }
};

exports.messageList = async (req, res, next) => {
  try {
    const _messages = await Message.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      // include: [
      //   {
      //     model: Child,
      //     as: "children",
      //     attributes: ["id"],
      //   },
      // ],
    });
    res.json(_messages);
  } catch (error) {
    next(error);
  }
};
