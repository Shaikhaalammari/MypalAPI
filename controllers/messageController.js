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
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(_messages);
  } catch (error) {
    next(error);
  }
};

exports.messageArchive = async (req, res) => {
  const { messageId } = req.params;
  const message = message.find((message) => message.id === +this.messageId);
  message.archive = !message.archive;
  res.status(204).end();
};

exports.messageDelete = async (req, res, next) => {
  console.log(req.message);
  try {
    await req.message.destroy();

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
