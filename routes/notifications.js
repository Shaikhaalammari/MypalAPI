const express = require("express");
const router = express.Router();
const passport = require("passport");
//controllers
const { notification } = require("../controllers/notificationController");

// Add Child Message
router.post("/notifications", notification);

module.exports = router;
