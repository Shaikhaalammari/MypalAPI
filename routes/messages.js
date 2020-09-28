const express = require("express");
const router = express.Router();
const passport = require("passport");

//controllers
const { messageList } = require("../controllers/messageController");

// Midleware
const upload = require("../middleware/multer");

router.param("messageId", async (req, res, next, messageId) => {
  console.log(`The value of message's ID is ${messageId}`);
  const message = await fetchMessage(messageId, next);
  if (message) {
    req.message = message;
    next();
  } else {
    const err = new Error("Message not found");
    err.status = 404;
    next(err);
  }
});

// Message List
router.get("/", messageList);

module.exports = router;
