const slugify = require("slugify");

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
    const newMessage = await Message.create(req.body);
    res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};
