const express = require("express");
const router = express.Router();
const passport = require("passport");

//controllers
const {
  fetchMessage,
  messageList,
  messageDelete,
  messageArchive,
} = require("../controllers/messageController");

// Midleware
const upload = require("../middleware/multer");

router.param("messageId", async (req, res, next, messageId) => {
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

//delete Message
router.delete("/:messageId", messageDelete);

//Message Archive
router.put("/:messageId", messageArchive);

module.exports = router;
