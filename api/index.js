const express =require("express")
const app=express()
const mongoose =require("mongoose");
const cors=require("cors");
const {register_controller} = require("./controller/register");
const {login_controller}= require("./controller/login");
const {jwtcheck} =require("./controller/jwtcheck");
const fs =require("fs")
const multer =require("multer");
const { uploadModel } = require("./model/post");


const uploadmiddleware=multer({dest:'uploads/'});

app.use(cors( {credentials:true,origin:"http://localhost:3000"}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/uploads',express.static(__dirname + '/uploads'))   //for static files
// 

mongoose.connect("mongodb://127.0.0.1:27017/userlogin")
.then(()=>{console.log("mongo is connected")})
.catch(()=>{console.log('mongo is not connected ')})


app.post("/register",register_controller)
app.post("/login",login_controller)
app.get("/profile",()=>{
    res.json()
})


app.post("/post",uploadmiddleware.single("file"), async (req,res)=>{
    const {originalname,path}=req.file
    const parts=originalname.split(".")
    const ext =parts[parts.length -1];
    const newpath= path+"."+ext;
    fs.renameSync(path,newpath);

    const {title,summary,content,file}=req.body
     const postdoc=await uploadModel.create({
        title,summary,
        content,cover:newpath,
        
    })
    res.json(postdoc);
    })
app.get("/post",async (req,res)=>{
     res.json( await uploadModel.find().sort({createdAt:-1}))
})

app.get("/post/:id",async (req,res)=>{
    const {id}=req.params;
    const postdoc= await uploadModel.findById(id);
    res.json(postdoc);
})





app.listen(4000,(()=>{
    console.log("server started ")
}))