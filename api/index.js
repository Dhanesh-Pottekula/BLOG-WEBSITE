const express =require("express")
const app=express()
const mongoose =require("mongoose");
const cors=require("cors");
const {register_controller} = require("./controller/register");
const {login_controller}= require("./controller/login");
const {jwtcheck} =require("./controller/jwtcheck");

app.use(cors( {credentials:true,origin:"http://localhost:3000"}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/userlogin")
.then(()=>{console.log("mongo is connected")})
.catch(()=>{console.log('mongo is not connected ')})


app.post("/register",register_controller)
app.post("/login",login_controller)
app.get("/profile",jwtcheck)

app.listen(4000,(()=>{
    console.log("server started ")
}))