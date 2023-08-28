const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    coverImage: String
},{timestamps: true})

const Blog = mongoose.model("Blog",blogSchema);

module.exports = Blog;