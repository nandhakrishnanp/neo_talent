const mongoose = require("mongoose");




const HrSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },  
    email:
    {
         type: String,
         required: true,
        
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    });

module.exports = mongoose.model("hr", HrSchema);
