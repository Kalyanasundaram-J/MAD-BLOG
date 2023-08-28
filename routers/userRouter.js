const express = require("express")
const router = express.Router();

// Include Controllers Start
const {handleUserSignIn, handleUserSignUp, handleUserSignOut} = require('../controllers/userController');

// Include Controllers End

// Get
router.get('/signout',handleUserSignOut)
// Post
router.post('/signin',handleUserSignIn);
router.post('/signup',handleUserSignUp);

module.exports = router;