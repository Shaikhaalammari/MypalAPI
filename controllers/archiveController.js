//data
const { Archive, Message } = require("../db/models");
const { findByPk } = require("../db/models/User");

exports.fetchArchive = async (archiveId, next) => {
  try {
    const archive = await Archive.findByPk(archiveId);
    return archive;
  } catch (error) {
    next(error);
  }
};

exports.archiveList = async (req, res, next) => {
  try {
    const _archives = await Archive.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(_archives);
  } catch (error) {
    next(error);
  }
};

exports.addArchive = async (req, res, next) => {
  try {
    const newArchive = await Message.findByPk(messageId);
    // const newArchive = await Archive.create(req.body);
    res.status(201).json(newArchive);
  } catch (error) {
    next(error);
  }
};
