const Blog = require("../models/blog");

exports.renderCreateBlog = function(req,res) {
  res.render("createBlog", { user: req.user,editBlog:false,blog:{} });
}

exports.handleCreateNewBlog = async function(req,res) {
    const {title,description} = req.body
    try{
        if(!title || !description) throw new Error("Both title and description are required");
        let coverImage = "";
        if(req.file?.filename) coverImage = req.file.filename
        await Blog.create({title,description,coverImage,createdBy:req.user._id});
        return res.render("createBlog", { user: req.user,
            editBlog:false,
            blog:{},
            message:"Blog created successfully" });
    }catch(error) {
        return res.render("createBlog",{error,editBlog:false,blog:{}})
    }
}

exports.renderBlogPost = async function(req,res) {
    try{
        const blogId = req.params.id;
        const blog = await Blog.findById(blogId).populate({
            path: 'createdBy',
            select: 'fullName'
        });
        res.render("blog",{
            user:req.user,
            blog
        })
    }
    catch(error) {
        return res.render("response500");
    }
}

exports.renderEditBlogPost = async function(req,res) {
    try {
        const blogId = req.params.id;
        const blog = await Blog.findOne({_id:blogId,createdBy:req.user._id});
        if(!blog) throw new Error("Don't have access.")
        return res.render("createBlog",{
            user:req.user,
            blog,
            editBlog: true
        });
    }
    catch (error) {
        res.render("response500");
    }
}

exports.renderMyBlogs = async function(req,res) {
    try{
        const userId = req.user._id;
        const blogs = await Blog.find({createdBy:userId});
        return res.render("myBlogs", {
            user:req.user,
            blogs
        })
    }catch (error) {
        return res.render("response500")
    }
}

exports.handleDeleteCoverImage = async function(req,res) {
    try{
        const id = req.params.id;
        await Blog.updateOne({_id:id,createdBy:req.user._id},{coverImage:""})
        .then(res=>{
            console.log(res)
        })
        .catch(error=>{
            console.log(error);
            throw new Error("Unable to remove cover Image")
        });
        res.render("createBlog",{
            user:req.user,
            editBlog:false,
            blog:{},
            message:"Successfully removed the CoverImage"
        })
    }
    catch(error) {
        res.render("response500")
    }
}

exports.handleUpdateBlog = async function(req,res) {
    try{
        const id = req.params.id;
        const {title,description} = req.body
        if(!title || !description) return res.status(400).send();
        let payload = {title,description}
        if(req.file?.filename) payload['coverImage'] = req.file.filename
        console.log(payload)
        await Blog.updateOne({_id:id,createdBy:req.user._id},payload)
        .then(res=>{console.log(res.acknowledged?"Successfully Updated":"Something went wrong")})
        .catch(error=>{
            console.log(error);
            return res.status(400).send()
        })
        return exports.renderMyBlogs(req,res)
    }
    catch(error){
        return res.status(500).render("response500")
    }
}

exports.handleDeleteBlog = async function (req,res) {
    try{
        const id = req.params.id;
        const blog = await Blog.findOne({_id:id,createdBy:req.user._id});
        console.log(blog,id,req.user._id)
        if(blog) {
            await blog.deleteOne({id});
        }
        exports.renderMyBlogs(req,res)
        return
    }
    catch (error) {
        console.log(error)
        return res.status(401).render("response401")
    }
}