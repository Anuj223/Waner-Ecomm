const mongoose =  require("mongoose");

/* 
->name
->userId
->password
->email
->usertype
*/

const userScehma = new mongoose.Schema({
        name : {
                type : String,
                required : true 
        },
        userId : {
                type : String,
                required : true,
                unique : true
        },
        password : {
                type : String,
                required : true
        },
        email : {
                type : String,
                required : true,
                unique : true,
                lowercase : true
        },
        userType :{
                type : String,
                required : true,
                default : "Customer",
                enum : ["Customer","Admin"]
        }
},{timestamps : true,versionKey : false})
 
module.exports = mongoose.model('User',userScehma);
