const mongoose = require("mongoose");

const HiringSchema = new mongoose.Schema({
  applicantId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  jobId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("hiring", HiringSchema);

