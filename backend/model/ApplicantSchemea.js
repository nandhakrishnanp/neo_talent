const mongoose = require("mongoose");


const ApplicantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  jobId: {
    type: String,
    required: true,
  },
  userId:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  mobilenumber: {
    type: Number,
    required: true,
  },
  about: {
    type: String,
  },
  skills: {
    type: [String],
  },

  ressumeUrl: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("applicant", ApplicantSchema);
