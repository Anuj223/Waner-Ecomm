/**
 * post localhost:8080/ecomm/api/vi/categories
 */
const category_controller = require("../controller/category.controller")
const authMW = require("../middleware/auth.mw") 
module.exports =(app)=>{
        app.post("/ecomm/api/vi/categories",[authMW.verifyToken,authMW.isAdmin],category_controller.createnewCategory)

}