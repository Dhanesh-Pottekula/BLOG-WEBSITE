const {user_model} =require("../model/user")
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);


async function register_controller(req,res){
    try{
        const {username, password}= req.body;
        await user_model.create({
            username,password:bcrypt.hashSync(password, salt),
    });
    console.log("success")
     return res.json({status:200})
    }catch{
        return res
    }
}

module.exports= {register_controller}