// check if the request body is proper or not 
const user_model = require("../model/user.model")
const jwt=require("jsonwebtoken")
const auth_confi=require("../server_configure/auth.configure")

const verifySignUpBody = async (req,res,next)=>{

        try{

                //check for the name 
                if(!req.body.name){
                        return res.status(400).send({
                                message : "Failed ! Name was not provided"
                        })
                }       
                
                //check for the email
                if(!req.body.email){
                        return res.status(400).send({
                                message : "Failed ! Email was not provided"
                        })
                }

                //check for the userId
                if(!req.body.userId){
                        return res.status(400).send({
                                message : "Failed ! UserId was not provided"
                        })
                }       
                
                //check for password
                if(!req.body.password){
                        return res.status(400).send({
                                message : "Failed ! password was not provided"
                        })
                }       
                
                //check if the user with same user id is present or not
                const user = await user_model.findOne({userId : req.body.userId})
                
                if(user){
                        return res.status(400).send({
                                message : "Failed ! user with same UserId is already present"
                        })    
                }
                next()
        }catch(err){
                console.log("Error while validting request",err);
                res.status(500).send({
                        message : "Error while validating request"
                })
        }
} 

const verifySignInBody = async (req,res,next)=>{

                //check is userId is not given
                if(!req.body.userId){
                        return res.status(400).send({
                                message : "Failed ! UserId was not provided"
                        })
                }    
                      //check for password
                      if(!req.body.password){
                        return res.status(400).send({
                                message : "Failed ! password was not provided"
                        })
                }    
        
        next()
}

const verifyToken =(req,res,next)=>{
        //check if the token is present int the header or not
        const token = req.headers['x-access-token']

        if(!token)
        {
                return res.status(403).send({
                        message : "No token found : UnAuthorized"
                })
        }

        //if the token is valid
        jwt.verify(token ,auth_confi.secret ,async (err,decoded)=>{
                if(err){
                        return res.status(401).send({
                                message : "Unauthorized !"
                        })
                }
                const user = await user_model.findOne({userId : decoded.id})
                if(!user)
                {
                        return res.status(400).send({
                                meassage : "User with the given token doesn't exist"
                        })
                }
                req.user = user
                next()
        })
        
}

const isAdmin = (req,res,next)=>{
        const user = req.user
        if(user && user.userType == "Admin")
        {
                next()
        }
        else{
                return res.status(403).send({
                        message : "Only Admin user is allowed"
                })
        }
}
module.exports = {
        verifySignUpBody : verifySignUpBody,
        verifySignInBody : verifySignInBody,
        verifyToken : verifyToken,
        isAdmin : isAdmin
}