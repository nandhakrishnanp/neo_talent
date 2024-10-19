const mongoose = require("mongoose");


const ProjectSchema = new mongoose.Schema({
    projectname: {
        type: String,
        required: true,
    },
    projecttype: {
        type: String,
        required: true,
    },
    projectdescription: {
        type: String,
        required: true,
    },
    skills :{
        type: [String],
        required: true,
    },
    projectrequirements: {
        type: [String],
        required: true,
    },
    projectresponsibilities: {
        type: [String],
        required: true,
    },
    projectexperience: {
        type: String,
        required: true,
    },
   
    projectcategory: {
        type: String,
        required: true,
    },
    projectstatus: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("project", ProjectSchema);