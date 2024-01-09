const express = require("express");
const { importData, count, getAllGuardianFields } = require("../controller");
const router = express.Router();
const multer = require("../middleware/multer");

router.post("/import", multer.single("file"), importData);
// router.get("/count", count);
router.get("/all-guardian-fields", getAllGuardianFields);
module.exports = router;
