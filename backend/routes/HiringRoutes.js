
const express = require("express");
const { addHiring ,getHiring } = require("../controller/HiringController");
const router = express.Router();



router.post("/addhiring", addHiring);
router.get("/gethiring", getHiring);

module.exports = router;