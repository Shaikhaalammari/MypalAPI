const express = require("express");
const router = express.Router();
const passport = require("passport");

//controllers
const { archiveList, addArchive } = require("../controllers/archiveController");

router.param("archiveId", async (req, res, next, archiveId) => {
  console.log(`The value of archive's ID is ${archiveId}`);
  const archive = await fetchArchive(archiveId, next);
  if (archive) {
    req.archive = archive;
    next();
  } else {
    const err = new Error("Archive not found");
    err.status = 404;
    next(err);
  }
});

// ArchiveList
router.get("/", archiveList);

// Add Archive
router.post("/", addArchive);

module.exports = router;
