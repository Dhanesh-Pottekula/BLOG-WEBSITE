
const express=require("express");
const app= express();

const {user_model} =require("../model/user")
const jwt =require("jsonwebtoken");
const cors= require("cors");
const secret="aoksnflkandsoglskdlksdngol"

app.use(cors( {credentials:true,origin:"http://localhost:3000"}));
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

async function login_controller(req,res){
    if (req.body){
        const {username,password}=  req.body;
        const userdoc= await user_model.findOne({username});
        if(userdoc){
            const passok = bcrypt.compareSync(password, userdoc.password);
        
        
        if (passok){
            jwt.sign({username,id:userdoc._id},secret,{},(err,token)=>{
                if (err) throw err;
                res.cookie('token',token).json("ok")
            })
        }else{
            return res
        }}else{
            return res}
}}

module.exports={login_controller}