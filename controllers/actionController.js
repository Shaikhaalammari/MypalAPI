//data
const { Action } = require("../db/models");

exports.fetchAction = async (actionId, next) => {
  try {
    const action = await Action.findByPk(actionId);
    return action;
  } catch (error) {
    next(error);
  }
};

exports.actionList = async (req, res, next) => {
  try {
    const _actions = await Action.findAll({
      attributes: { exclude: ["createdAt"] },
    });
    res.json(_actions);
  } catch (error) {
    next(error);
  }
};

exports.addAction = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/media/${
        req.file.filename
      }`;
    }

    const newAction = await Action.create(req.body);
    res.status(201).json(newAction);
  } catch (error) {
    next(error);
  }
};
