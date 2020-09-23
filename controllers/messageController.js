//data
const { Message } = require("../db/models");

// exports.childRequest = async (req, res, next) => {
//   try {
//     //Creating child message
//     req.body.childId = req.child.id;

//     console.log("exports.checkout -> orderItems", childMessages);

//     const newMessage = await ChildMessage.create(childMessage);
//     res.status(201).json(newMessage);
//   } catch (error) {
//     next(error);
//   }
// };

exports.message = async (req, res, next) => {
  try {
    const actionItem = {
      ...req.body,
      childId: req.user.id,
    };
    const newItem = await Message.create(actionItem);
    res.json(newItem);
  } catch (error) {
    next(error);
  }
};
