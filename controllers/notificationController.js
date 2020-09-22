//data
const { Notification } = require("../db/models");

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

exports.notification = async (req, res, next) => {
  try {
    const messageItem = {
      ...req.body,
      childId: req.user.id,
    };
    const newItem = await Notification.create(messageItem);
    res.json(newItem);
  } catch (error) {
    next(error);
  }
};
