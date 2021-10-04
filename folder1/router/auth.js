const { response } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const User = require("../model/userschema")
const authenticate = require("../middleware/authenticate")
// console.log("hello auth")
router.get('/', (req, res) => {
    res.send("helloworld from router")
})
// with promises
// // router.post('/register', (req, res) => {
// //     console.log(req.body)
// //     // res.json({message:req.body})
// //     // object destructuring
// //     const {name,email,phone,work,password,cpassword}=req.body
// //     // to check whether all the fileds are filled
// //     if(!name||!email||!phone||!work||!password||!cpassword){
// //         res.status(422).json({errormessage:"please enter all the fields"})
// //     }
// //     // to whetether the email already exists
// //     User.findOne({email:email}).then((userexist)=>{
// //         console.log(userexist)
// //         if(userexist){
// //         res.status(422).json({errormessage:"email already exists"})}
// //         // if email already doesnot exists post the data to database
// //         const user=new User({name,email,phone,work,password,cpassword})
// //         user.save().then(()=>{
// //             res.status(200).json({message:"data stored sucessfully"})
// //         }).catch((err)=>{
// // res.status(500).json({error:"failed to register"})
// //         })
// //     }).catch((err)=>{
// // console.log(err);
// //     })
// // })
// module.exports = router
// // with async and await
router.post('/register', async (req, res) => {
    console.log(req.body)
    // res.json({message:req.body})
    // object destructuring
    const { name, email, phone, work, password, cpassword } = req.body
    // to check whether all the fileds are filled
    // vadidation
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ errormessage: "please enter all the fields" })
    }
    try {
        const userexist = await User.findOne({ email: email })
        if (userexist) {

            res.status(422).json({ errormessage: "email already exists" })
        }
        if (password != cpassword) {
            res.status(422).json({ errormessage: "password doesnot match" })
        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword })
            const userRegister = await user.save()
            if (userRegister) {
                return res.status(200).json({ message: "data stored sucessfully" })
            } else {
                return res.status(500).json({ error: "failed to register" })
            }
        }
    } catch (error) {
        console.log(error)
    }
})
router.post("/signin", async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(422).json({ errormessage: "please fill the fields" });
        }
        // validation for currentemail matching with the exsisting email in the database
        const loginRegister = await User.findOne({ email: email })
        // console.log(loginregister)
        if (loginRegister) {
            const ismatch = await bcrypt.compare(password, loginRegister.password);

            token = await loginRegister.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })
            console.log(token)
            if (!ismatch) {
                res.status(400).json({ error: "invalid credentials" })
            } else {
                res.status(200).json({ message: "login sucessfull" })
            }
        } else {
            res.status(400).json({ error: "invalid credentials" })
        }
    }
    catch (e) {
        console.log(e);
    }
})
router.get('/about', authenticate, (req, res) => {
    console.log("about")
    res.send(req.rootUser)
})
router.get('/getdata', authenticate, (req, res) => {
    res.send(req.rootUser)
})
router.post('/contact', authenticate, async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        if (!name || !phone || !email || !message) {
            return res.json({ error: "plz fill the contactform" })
        }
        const userContact = await User.findOne({ _id: req.userID })
        if (userContact) {
            const usermessage = await userContact.addMessage(name, email, phone, message)
            await userContact.save()

            res.status(201).json({ message: "data stored sucessfully" })
        }
    } catch (error) {
        console.log(error)
    }
   
})
router.get('/logout',authenticate, (req, res) => {
    console.log("hello cookie")
    console.log(req)
    res.clearCookie('jwtoken', { httpOnly: true, path: '/', domain: 'localhost' })
    res.status(200).send("user logout sucessfully")
})
module.exports = router
