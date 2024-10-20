const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  empid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileurl: {
    type: String,
    default:
      "https://i.pinimg.com/originals/00/1e/5e/001e5e4b92840c5c4625f181748a1971.jpg",
  },
  age: {
    type: Number,
  },
  position: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    
  },
  certificatios: {
    type: [String],
  },
  email: {
    type: String,
    required: true,
  },
  projects: {
    type: [String],
  },
  about: {
    type: String,
  },
  skills: {
    type: [String],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("employee", EmployeeSchema);
