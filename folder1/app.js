const dotnev=require("dotenv")
const mongoose=require('mongoose');
const express = require('express');
const app = express(); // now this express contains different functions and methoods
const cors=require("cors");
app.use(cors())
dotnev.config({path:"./config.env"})
require("./db/conn")
app.use(express.json())
app.use(require("./router/auth"))
const PORT=process.env.PORT
// app.get("where to show",what to show)
// creating the middleware
const middleware=(req,res,next)=>{
    console.log("saivivek")
    next()
}
// routing using the expressjs
app.get('/', (req, res) => {
    res.send("helloworld")
})
// app.get('/about',middleware,(req, res) => {
//     console.log("hello vivek")
//     res.send("aboutpage")
// })
// app.get('/contact', (req, res) => {
//     // res.cookie("test","sonu");
//     res.send("contactpage")
// })
app.get('/sigin', (req, res) => {
    res.send("signinpage")
})
// app.get('/logout', (req, res) => {
//     res.send("signinpage")
// })
app.post('/signup', (req, res) => {
    res.send("signup")
})
app.listen( PORT, () => {
    console.log(`${PORT}`)
})
