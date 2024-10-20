const express = require("express");
const {
  addHiring,
  getHiring,
  addApplicant,
  getApplicantbyId,
} = require("../controller/HiringController");
const router = express.Router();

router.post("/addhiring", addHiring);
router.get("/gethiring", getHiring);
router.post("/postApplicant", addApplicant);
router.get("/applicant", getApplicantbyId);

module.exports = router;
