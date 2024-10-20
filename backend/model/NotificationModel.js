const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    suggestion: {
        type: [String],
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    });

module.exports = mongoose.model("notification", NotificationSchema);
