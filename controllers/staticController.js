const Blog = require("../models/blog");

exports.renderHome = async function (req,res) {
    const blogs = await Blog.find({}).populate({
        path:"createdBy",
        select:"fullName"
    });
    res.render("home",{user:req.user,blogs:blogs})
}
exports.renderSignIn = function (req,res) {
    if(req.user) return res.redirect('/');
    res.render("signIn")
}
exports.renderSignUp = function (req,res) {
    if(req.user) return res.redirect('/');
    res.render("signUp");
}
exports.render404 = function (req,res) {
    res.render("response404")
}