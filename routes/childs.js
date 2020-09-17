const express = require("express");
const router = express.Router();
const passport = require("passport");

//controllers
const {
  childList,
  childCreate,
  childUpdate,
} = require("../controllers/childController");

//List
router.get("/", childList);

//Create
router.post("/", passport.authenticate("jwt", { session: false }), childCreate);

// Update
router.put(
  "/:childId",
  passport.authenticate("jwt", { session: false }),
  childUpdate
);

module.exports = router;
