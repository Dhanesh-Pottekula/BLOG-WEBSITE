
const express=require("express");
const app= express();

const {user_model} =require("../model/user")
const jwt =require("jsonwebtoken");
const cors= require("cors");
const secret="aoksnflkandsoglskdlksdngol"

app.use(cors( {credentials:true,origin:"http://localhost:3000"}));

function jwtcheck(req,res){
    // const token=req.cookies.token;
    
    // jwt.verify(token,secret,{},(err,info)=>{
    //     if (err) throw err;
    //     res.json(info);
    // })
}

module.exports={jwtcheck};