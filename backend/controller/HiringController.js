const Hireings = require("../model/HiringSchmea");
const ApplicantSchema = require("../model/ApplicantSchemea");
const EmployeeSchema = require("../model/EmployeeSchemea");
const addHiring = async (req, res) => {
  const { applicantId, name, jobId, status, email } = req.body;

  if (!applicantId || !name || !jobId || !status) {
    return res.json({ msg: "Fill all the Fields" }).status(400);
  }

  try {
    const newHiring = new Hireings({
      applicantId: applicantId,
      name: name,
      jobId: jobId,
      status: status,
      email: email,
    });
    newHiring.save();
    return res
      .json({ msg: "Hiring Added successfully", accepted: "ok" })
      .status(200);
  } catch (error) {
    res.json({ msg: "Hiring Failed" }).status(400);
  }
};

const getHiring = async (req, res) => {
  try {
    // Fetch all hiring data and populate the associated applicant details using 'applicantId'
    const allHiring = await Hireings.find()
    res.status(200).json(allHiring);
  } catch (error) {
    res.status(500).json({ message: "Error fetching hiring data", error });
  }
};


// name": "John Doe",
//   "userName": "johndoe123",
//   "empid": "EMP001",
//   "password": "securepassword123",
//   "position": "Software Engineer",
//   "department": "Development",
//   "email": "johndoe@example.com"
const addEmployee = async (req, res) => {
  const { empid, userName, password, email, name, position, department } = req.body;

  if (!empid || !userName || !password || !email || !name || !position || !department ) {
    return res.json({ msg: "Fill all the Fields" }).status(400);
  }

  try {
    const newUser = new EmployeeSchema({
      empid: empid,
      userName: userName,
      password: password,
      email: email,
      name: name,
      position: position,
      department: department,
    });
    newUser.save();
    return res
      .json({ msg: "Employee Added successfully", accepted: "ok" })
      .status(200);
  } catch (error) {
    res.json({ msg: "Employee Failed" }).status(400);
  }
}

const addApplicant = async (req, res) => {
  const {
    name,
    jobId,
    userId,
    email,
    mobilenumber,
    about,
    skills,
    ressumeUrl,
  } = req.body;
  try {
    const newApplicant = new ApplicantSchema({
      name,
      jobId,
      email,
      userId,
      mobilenumber,
      about,
      skills,
      ressumeUrl,
    });
    await newApplicant.save();
    res.status(201).json(newApplicant);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getApplicantbyId = async (req, res) => {
  try {
    const applicant = await ApplicantSchema.find();
    res.json(applicant).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(404);
  }
};

module.exports = { addHiring, getHiring, addApplicant, getApplicantbyId , addEmployee};
