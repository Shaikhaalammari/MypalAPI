const express = require("express");
const router = express.Router();
const passport = require("passport");
//controllers
const { message } = require("../controllers/messageController");

// Add Child Message
router.post("/messages", message);

module.exports = router;
