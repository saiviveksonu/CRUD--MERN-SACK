const jwt = require('jsonwebtoken');
const User = require("../model/userschema")
const Authenticate = async (req, res, next) => {
    try {
        let token = req.headers.cookie
        
        if ( token && token.startsWith("jwtoken=")) {
            token = token.substring(8);

            // console.log(token)
        }
        const verifyData = jwt.verify(token, process.env.SCREATE_KEY)
        // console.log(verifyData);
        const rootUser = await User.findOne({ _id: verifyData._id, "tokens.token": token })
        // console.log(rootUser)
        if (!rootUser) {
            throw new Error("user not found")
        }
        
        
    //    req.user=user
        req.token = token;
        req.rootUser = rootUser;
        
        req.userID=  rootUser._id;
       console.log("cookie verify")
        next();
    } catch (error) {
        console.log(error)
        res.status(400).send("no token provided")
    }
}
module.exports = Authenticate;