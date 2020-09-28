const express = require("express");
const router = express.Router();
const passport = require("passport");

//controllers
const { actionList, addAction } = require("../controllers/actionController");

// Midleware
const upload = require("../middleware/multer");

router.param("actionId", async (req, res, next, actionId) => {
  console.log(`The value of action's ID is ${actionId}`);
  const action = await fetchAction(actionId, next);
  if (action) {
    req.action = action;
    next();
  } else {
    const err = new Error("Action not found");
    err.status = 404;
    next(err);
  }
});

// Action List
router.get("/", actionList);

// Add action
router.post("/", upload.single("image"), addAction);

module.exports = router;
