const mongoose = require("mongoose");


const JobSchema = new mongoose.Schema({
    jobtitle: {
        type: String,
        required: true,
    },
    jobtype: {
        type: String,
        required: true,
    },
    joblocation: {
        type: String,
        required: true,
    },
    jobdescription: {
        type: String,
        required: true,
    },
    jobrequirements: {
        type: [String],
        required: true,
    },
    jobresponsibilities: {
        type: [String],
        required: true,
    },
    jobexperience: {
        type: String,
        required: true,
    },
    jobeducation: {
        type: String,
        required: true,
    },
    jobcategory: {
        type: String,
        required: true,
    },
    jobstatus: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("job", JobSchema);