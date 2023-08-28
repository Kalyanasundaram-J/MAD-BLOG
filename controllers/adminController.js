const Blog = require("../models/blog");
const User = require("../models/user");

exports.renderUsers = async function (req,res) {
    try{
        const users = await User.find({});
        res.render("userList",{userList:users,user:req.user});
    }
    catch(error){
        res.render("response500");
    }
}

exports.renderBlogList = async function (req,res) {
    try{
        const blogs = await Blog.find({}).populate({
            path: 'createdBy',
            select: 'fullName'
        });
        res.render("blogList",{blogs,user:req.user});
    }catch(error){
        res.render("response500");
    }
}

exports.handleBlogDelete = async function (req,res) {
    try{
        const id = req.params.id;
        await Blog.findByIdAndDelete(id)
        .then((res)=>{
            console.log("Deleted the blog");
        })
        .catch((error)=>{
            console.log(error)
            throw new Error(error);
        })
        return exports.renderBlogList(req,res)
    }
    catch(error) {
        console.log(error)

        return res.status(500).render("response500")
    }
}

exports.handleUserBlocking = async function (req,res) {
    try{
        const id = req.params.id
        await User.findByIdAndUpdate(id,{blocked:true});
        return exports.renderUsers(req,res);
    }
    catch (error){
        return res.status(500).render("response500");
    }
}