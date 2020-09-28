//data
const { Archive } = require("../db/models");

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
    const newArchive = await Archive.create(req.body);
    res.status(201).json(newArchive);
  } catch (error) {
    next(error);
  }
};
