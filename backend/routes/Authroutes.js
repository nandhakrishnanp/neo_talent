const express = require("express");
const {
  registerUser,
  loginUser,
  registerHr,
  loginHr,
  addmany ,
  getAllEmployees,
  getEmployeeById
} = require("../controller/Authcontroller");
const { model } = require("mongoose");
const router = express.Router();

router.post("/registeruser", registerUser);
router.post("/loginuser", loginUser);
router.post("/registerhr", registerHr);
router.post("/loginhr", loginHr);
router.post("/addmany", addmany);
router.get("/getallemployees", getAllEmployees);
router.get("/getemployeebyid/:id", getEmployeeById);
module.exports = router;
