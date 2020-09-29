//data
const { Child, User, Message } = require("../db/models");
//jwt
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRATION_MS } = require("../config/keys");

exports.fetchChild = async (childId, next) => {
  try {
    const child = await Child.findByPk(childId);
    return child;
  } catch (error) {
    next(error);
  }
};
exports.childList = async (req, res) => {
  try {
    const childs = await Child.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: Message,
        as: "messages",
        attributes: ["id"],
      },
    });
    res.json(children);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.childCreate = async (req, res, next) => {
  try {
    console.log(req.body);
    req.body.userId = req.user.id;
    const newChild = await Child.create(req.body);
    res.status(201).json(newChild); //(/caregiver/child/)
  } catch (error) {
    next(error);
  }
};

exports.childUpdate = async (req, res, next) => {
  try {
    await req.child.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

exports.childSignin = async (req, res) => {
  const { child } = req;
  const payload = {
    id: child.id,
    name: child.name,
    age: child.age,
    gender: child.gender,

    expires: Date.now() + parseInt(JWT_EXPIRATION_MS), // the token will expire 15 minutes from when it's generated
  };
  const token = jwt.sign(JSON.stringify(payload), JWT_SECRET);
  res.json({ token });
};

exports.addMessage = async (req, res, next) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};
