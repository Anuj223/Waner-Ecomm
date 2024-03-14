const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const db_config = require("./server_configure/db.configure") 
const port = 8080
const user_model = require("./model/user.model");
const { log } = require("console");
const app = express();
const bcryptjs = require("bcryptjs");

app.use(express.json())

//Admin
//connection with mongodb
mongoose.connect(db_config.DB_URL)

const db = mongoose.connection
db.on("error" , ()=>{
        console.log("Error while connecting")
})

db.once("open" , ()=>{
        console.log("Connected to server")
        init()
})

async function init(){
        try{

                let user = await user_model.findOne({ userId : "admin"})
                if(user){
                        console.log("Admin is already present");
                        return;
                }
        }catch(err)
        {
                console.log("error while fetching data",err);
        }


        try{
                user =await user_model.create({
                        name : "A_J",
                        userId : "admin",
                        email : "ajrock@gmail.com",
                        userType : "Admin",
                        password : bcryptjs.hashSync("Welcome1",8)
                })

                console.log("Admin created",user);
        }catch(err)
        {
                console.log("Error while facting admin",err);
        }
}

app.use(express.static(path.join(__dirname,'front')))
app.use(express.urlencoded());
// Stich the routes to the server
require("./routes/auth.routes")(app)
require("./routes/category.routes")(app)

app.listen(port,()=>
        console.log(`Server is running at  ${port}`)
);