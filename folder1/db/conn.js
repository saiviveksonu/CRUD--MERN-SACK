const mongoose=require('mongoose');
const DB=process.env.DATABASE
// creating a coonection between nodejs and mongodb using mongoose
mongoose.connect(DB,{useCreateIndex:true, useNewUrlParser: true , useUnifiedTopology: true,useFindAndModify:false })
.then(()=>{
    console.log("connection sucessful");
}).catch((err)=>{console.log(err)});
