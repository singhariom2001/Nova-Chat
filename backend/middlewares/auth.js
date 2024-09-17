//middlewares are mainly used for performing authorization
const jwt = require("jsonwebtoken");
require("dotenv").config();

//auth middleware - middleware for checking authenticity
exports.auth = (req, res, next) => {
     try{
        // Extract JWT token from Authorization header
        const authHeader = req.headers.authorization;

        // Token is not found
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Token missing or improperly formatted",
            });
        }

        // Extract token by removing 'Bearer ' prefix
        const token = authHeader.split(" ")[1];
        
        //token found
        try{
            const payload = jwt.verify(token, process.env.JWT_SECRET); // the data present inside the payload of the token is extracted out and then stored inside the payload variable
            console.log(payload);

            req.user = payload; //inside of the req we made a field named as user and then stored the payload data
        }
        catch(err){
            return res.status(401).json({
                success: false,
                message: 'Token is Invalid'
            })
        }
        next();

     }
     catch(err){

        return res.status(401).json({
            success: false,
            message: 'Something went wron while verifying'
        })
     }
}

//isUser middleware- middleware for authorization
exports.isUser = (req, res, next) => {
    try{
        if(req.user.role !== "User"){
            return res.status(401).json({
                success: false,
                message: 'This page is only for Users'
            });
        }
        next();

    }
    catch(err){
        return res.status(500).json({
            success: false,
            message: 'User role is not matching'
        })

    }
}