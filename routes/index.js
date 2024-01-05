const express = require("express");
const { importData, count } = require("../controller");
const router = express.Router();
const multer = require("../middleware/multer");

router.post("/import", multer.single("file"), importData);
router.get("/count", count);
module.exports = router;
