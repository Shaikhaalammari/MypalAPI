//data
const { Child, User } = require("../db/models");

exports.childList = async (req, res) => {
  try {
    const childs = await User.findAll;
    res.json(childs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.childCreate = async (req, res, next) => {
  try {
    console.log(req.body);
    req.body.userId = req.user.id;

    const newChild = await Child.create(req.body);
    res.status(201).json(newChild);
    console.log(newChild);
  } catch (error) {
    next(error);
  }
};

exports.childUpdate = async (req, res, next) => {
  //   if (req.user || req.user.id === req.child.userId) {
  //     // not sure about this
  try {
    await req.child.update(req.body);
    res.status(204).end();
  } catch {
    const err = new Error("Unauthorized");
    err.status = 401;
    next(err);
  }
};
