const express = require("express");
const router = express.Router();
const {renderHome, renderSignIn, renderSignUp, render404} = require("../controllers/staticController");

// Get
router.get('/',renderHome);
router.get('/signin',renderSignIn);
router.get('/signup',renderSignUp);
router.get('/*',render404)

// Post

module.exports = router;