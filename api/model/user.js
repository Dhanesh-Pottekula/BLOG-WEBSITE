const mongoose=require("mongoose");
const mongoose_schema= new mongoose.Schema({
    username:{type:String,required:true, unique:true},
    password:{type:String,required:true},
},{timestamps:true});

const user_model= new mongoose.model("user_details",mongoose_schema);

module.exports={user_model}