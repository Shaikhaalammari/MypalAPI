const express = require("express");
const router = express.Router();

//controllers
const { messageList, addMessage } = require("../controllers/messageController");

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

// Messages List
router.get("/", messageList);

// Add message
router.post("/", addMessage);

module.exports = router;
