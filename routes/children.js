const express = require("express");
const router = express.Router();
const passport = require("passport");

//controllers
const {
  childList,
  childCreate,
  childUpdate,
  fetchChild,
  childSignin,
} = require("../controllers/childController");

//param
router.param("childId", async (req, res, next, childId) => {
  const child = await fetchChild(childId, next);
  if (child) {
    req.child = child;
    next();
  } else {
    const err = new Error("Child not found");
    err.status = 404;
    next(err);
  }
});

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

router.post("/:childId", childSignin);

module.exports = router;
