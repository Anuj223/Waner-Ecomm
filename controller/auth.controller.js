const bcrypts = require("bcryptjs");
const user_model = require("../model/user.model")
const jwt = require("jsonwebtoken")
const secret = require("../server_configure/auth.configure")
exports.signup = async (req,res)=>{

        // Read the request body
        const request_body = req.body 

        //Insert data in user collection in MongoDB
        const userObj = {
                name : request_body.name,
                userId : request_body.userId,
                email : request_body.email,
                userType : request_body.userType,
                password :bcrypts.hashSync(request_body.password ,8)
        }

        try{
                const user_created = await user_model.create(userObj)

                // return this user
                const res_obj={
                        name : user_created.name,
                        userId : user_created.userId,
                        email : user_created.email,
                        userType : user_created.userType,
                        createdAt : user_created.createdAt,
                        updatedAt : user_created.updatedAt
                }
                res.status(201).send(res_obj)

        }catch(err)
        {
                console.log("Error while inserting data",err)
                res.status(500).send({
                        message : "Some error happened while resgistering the use"
                })
        }

        //Return response to user
}

exports.signin = async (req,res) =>{
        
        // Check if user id is present or not 
        const user = await user_model.findOne({userId : req.body.userId})
        if(user == null){
                return res.status(400).send({
                        message : "Not a valid userId"
                })
        }

        //Password is correct
        const isValidPassword = bcrypts.compareSync(req.body.password,user.password)
        if(!isValidPassword){
                return res.status(401).send({
                        message : "Wrong password"
                })
        }

        //using jwt we will create the acess token with a given TTL and return
        const token = jwt.sign({id : user.userId},secret.secret,{
                expiresIn : 120
        })

        res.status(200).send({
                name : user.name,
                userId : user.userId,
                email : user.email,
                userType : user.userType,
                accessToken : token
        })
}