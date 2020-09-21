//data
const { Message } = require("../db/models");

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
      attributes: { exclude: ["createdAt"] },
    });
    res.json(_messages);
  } catch (error) {
    next(error);
  }
};

exports.addMessage = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${process.env.PORT ? "https" : "http"}://${req.get(
        "host"
      )}/media/${req.file.filename}`;
    }

    const newMessage = await Message.create(req.body);
    res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};

// exports.addMessage = async (req, res, next) => {
//   try {
//     const newMessage = await Message.create({ childId: req.child.id });
//     res.status(201).json(newMessage);
//   } catch (error) {
//     next(error);
//   }
// };
