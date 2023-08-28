const express = require("express");
const { renderUsers, renderBlogList, handleBlogDelete, handleUserBlocking } = require("../controllers/adminController");
const router = express.Router();

const authBeforeRout = function (req,res,next) {
    if(!req.user || req.user.blocked || req.user.role != "admin") {
        return res.render('response401')
    }
    next()
}

//Get
router.get('/users',authBeforeRout,renderUsers);
router.get('/blogs',authBeforeRout,renderBlogList);
router.get('/delete/:id',authBeforeRout,handleBlogDelete);
router.get('/block/:id',authBeforeRout,handleUserBlocking);
//Post
module.exports = router;