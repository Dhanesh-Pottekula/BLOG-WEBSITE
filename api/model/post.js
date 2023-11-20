const mongoose=require("mongoose");
const mongoose_schema= new mongoose.Schema({
    title:String,
    summary:String,
    content:String,
    cover:String,
},{timestamps:true});

const uploadModel= new mongoose.model("uploads",mongoose_schema);

module.exports={uploadModel}