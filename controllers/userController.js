const User = require('../models/user')
const bcrypt = require("bcrypt")
const {generateTokenForUser} = require('../utils/auth')

exports.handleUserSignIn = async function (req,res) {
    const {email,password} = req.body
    try {
        if(!email) throw new Error("Email address is required");
        if(!password) throw new Error("Password is required");
        const user = await User.findOne({email})
        if(!user) throw new Error("User with this email address does not exist.");
        await bcrypt.compare(password,user.password)
        .then(res=>{
            if(!res) throw new Error("Invalid Password")
        })
        const token = await generateTokenForUser(user._id);
        return res.cookie('token',token).redirect('/')
    }catch(error) {
        return res.render('signin',{error});
    }
}
exports.handleUserSignUp = async function (req,res) {
    const {fullName,email} = req.body
    let {password} = req.body
    try{
        if(!fullName) throw new Error("Full Name required");
        if(!email) throw new Error("Email address is required");
        if(!password || password.length < 4) throw new Error("Password is required and minimum lenght is 4");
        await bcrypt.hash(password,10)
        .then((hash)=>{
            password = hash;
        }).catch(error=>{
            throw new Error("Password Processing issue please try again")
        });
        const user = await User.create({fullName,email,password});
        const token = await generateTokenForUser(user._id);
        return res.cookie('token',token).redirect('/')
    }
    catch(error){
        if(error.code == 11000) return res.render('signup',{error:`User with email address "${error.keyValue.email}" is already exist <a href="/signin">Sign In</a>`});
        return res.render('signup',{error})
    }
}

exports.handleUserSignOut = function (req,res) {
    return res.clearCookie("token").redirect('/');
}