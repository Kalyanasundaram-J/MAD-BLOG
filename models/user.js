const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "Normal"
    },
    blocked: {
        type: Boolean,
        require: true,
        default: false
    },
    profilePic: {
        type: String,
        default: ""
    }
},{timestamps: true});

const User = mongoose.model("User",userSchema);

module.exports = User;