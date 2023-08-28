const express = require("express");
const upload = require("../utils/upload");
const {renderMyBlogs, renderCreateBlog, handleCreateNewBlog, renderBlogPost, renderEditBlogPost, handleDeleteCoverImage, handleUpdateBlog, handleDeleteBlog} = require("../controllers/blogController")
const router = express.Router();

const authBeforeRout = function (req,res,next) {
    if(!req.user || req.user.blocked) {
        return res.render('response401')
    }
    next()
}

// Get
router.get("/",authBeforeRout,renderMyBlogs);
router.get("/create",authBeforeRout, renderCreateBlog);
router.get("/view/:id",renderBlogPost);
router.get("/edit/:id",authBeforeRout,renderEditBlogPost);
router.get("/delete/:id",authBeforeRout,handleDeleteBlog);
// Post
router.post("/create",authBeforeRout, upload.single("coverImage"), handleCreateNewBlog);
router.post("/update/:id",authBeforeRout, upload.single("coverImage"), handleUpdateBlog);
router.post("/rci/:id",authBeforeRout,handleDeleteCoverImage);

module.exports = router;
