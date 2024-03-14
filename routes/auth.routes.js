/*
* post http://localhost:8080/signup.html
*/ 

const auth_Controller = require("../controller/auth.controller")
const authMW = require("../middleware/auth.mw") 
module.exports = (app)=>{
        
        // handover to the right controller
        app.post("/signup.html",[authMW.verifySignUpBody],auth_Controller.signup)

        /*
        post http://localhost:8080/sign.html
        */
       app.post("/signin.html",[authMW.verifySignInBody],auth_Controller.signin) 
}