const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Upload Directory variable
const uploadDirectory = "./public/uploads";

// Check whether the directory exist or not
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

// Setup storage for uploadad files
const storage = multer.diskStorage({
  destination: uploadDirectory,
  filename: (res, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Create the multer Instance
const upload = multer({ storage });

module.exports = upload;
