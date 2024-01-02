const express = require("express");
const { importData } = require("../controller");
const router = express.Router();
const multer = require("../middleware/multer");

router.post("/import", multer.single("file"), importData);
module.exports = router;
