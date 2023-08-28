const jwt = require("jsonwebtoken");
const User = require("../models/user");

const SEC_KEY = "$sec256@key";

async function generateTokenForUser(id) {
    try{
        const user = await User.findById(id)
        if(user.blocked){
            throw new Error("User has been blocked by the MADBlog");
        }
        const payload = {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            role: user.role,
            blocked: user.blocked
        }
        const token = jwt.sign(payload,SEC_KEY);
        return token;
    }catch(error) {
        throw new Error(error) 
    }
}

async function validateToken(token){
    return jwt.verify(token,SEC_KEY);
}

module.exports = {
    generateTokenForUser,
    validateToken
}