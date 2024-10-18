const User = require("../model/EmployeeSchemea");
const Hr = require("../model/HrSchmea");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { username, password, email, fullName, position, department, salary } =
    req.body;

  if (
    !username ||
    !password ||
    !email ||
    !fullName ||
    !position ||
    !department ||
    !salary
  ) {
    return res.json({ msg: "Fill all the Fields" }).status(400);
  }

  try {
    const isUser = await User.findOne({ userName: username });
    const isemail = await User.findOne({ email: email });
    if (isUser || isemail) {
      console.log("user already exists exists");
      return res.json({ msg: "User Already exists" }).status(400);
    }
    let salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    console.log(fullName);
    const newUser = new User({
      empid: Math.floor(Math.random() * 1000000),
      userName: username,
      password: hashedpassword,
      email: email,
      name: fullName,
      position: position,
      department: department,
      salary: salary,
    });
    newUser.save();
    return res
      .json({ msg: "User Added successfully", accepted: "ok" })
      .status(200);
  } catch (error) {
    res.json({ msg: "Registration Failed" }).status(400);
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  console.log(username + password);
  const user = await User.findOne({ userName: username });
  if (user) {
    const verify = await bcrypt.compare(password, user.password);
    if (verify) {
      const token = jwt.sign({ id: user._id , role:"EMPLOYEE" }, process.env.SIGN);
      res
        .json({
          msg: "Login successfull",
          token: token,
        })
        .status(200);
    } else {
      res
        .json({
          msg: "Incorrect password",
        })
        .status(400);
    }
  } else {
    res.json({
      msg: "User does not exits",
    });
  }
};

const registerHr = async (req, res) => {
  const { username, password, email, fullName } = req.body;

  if (!username || !password || !email || !fullName) {
    return res.json({ msg: "Fill all the Fields" }).status(400);
  }

  try {
    const isUser = await Hr.findOne({ userName: username });
    const isemail = await Hr.findOne({ email: email });
    if (isUser || isemail) {
      console.log("user already exists exists");
      return res.json({ msg: "User Already exists" }).status(400);
    }
    let salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    console.log(fullName);
    const newUser = new Hr({
      userName: username,
      password: hashedpassword,
      email: email,
      name: fullName,
      position: "HR",
      department: "HR",
      salary: 0,
    });
    newUser.save();
    return res
      .json({ msg: "User Added successfully", accepted: "ok" })
      .status(200);
  } catch (error) {
    res.json({ msg: "Registration Failed" }).status(400);
  }
};

const loginHr = async (req, res) => {
  const { email, password } = req.body;
    console.log(email + " "+ password);
    
  const hrdata = await Hr.findOne({ email: email });
  console.log("hrdata", hrdata);
  
  if (hrdata) {
    const verify = await bcrypt.compare(password, hrdata.password);
    if (verify) {
      const token = jwt.sign({ id: hrdata._id , role:"HR" }, process.env.SIGN);
      res
        .json({
          msg: "Login successfull",
          token: token,
        })
        .status(200);
    } else {
      res
        .json({
          msg: "Incorrect password",
        })
        .status(400);
    }
  } else {
    console.log("user does not exists");
    
    res.json({
      msg: "User does not exits",
    }).status(400);
  }
};




module.exports ={ registerUser, loginUser , registerHr, loginHr};
