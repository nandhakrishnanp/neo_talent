const express = require("express");
const {
  registerUser,
  loginUser,
  registerHr,
  loginHr,
} = require("../controller/Authcontroller");
const { model } = require("mongoose");
const router = express.Router();

router.post("/registeruser", registerUser);
router.post("/loginuser", loginUser);
router.post("/registerhr", registerHr);
router.post("/loginhr", loginHr);

module.exports = router;
