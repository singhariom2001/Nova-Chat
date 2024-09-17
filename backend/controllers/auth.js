const bcrypt = require('bcryptjs');
const User = require("../models/user");
const jwt = require("jsonwebtoken");

require("dotenv").config();

//addUser handler
exports.addUser = async(req, res) => {
    try{
        //fetch data
        const {name, email, password, role} = req.body;

        //check if the user exists
        const exitingUser = await User.findOne({email});
        if(exitingUser){
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            });
        }

        //if user doesn't exist
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch{
            return res.status(500).json({
                success: false,
                message: 'Error in hashing password'
            })
        }

        //create entry for user
        const user = await User.create({
            name, email, password: hashedPassword, role
        });

        res.status(200).json({
            success: true,
            message: 'User created Successfully'
        })

    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'User can not be registered. Please try again'
        })

    }
}

//login handler
exports.login = async(req, res) => {
    try{
        //data fetch
        const {email, password} = req.body;

        //email and password validation
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: 'Please fill all the details carefully'
            });
        }

        //check user is already registered or not
        const user = await User.findOne({email}).lean(); //we have used lean() so that we can convert a mongoose document into a plain js object. When we will do this then only we will be able to write user.token= token and user.password = undefined later

        //if not a registered user
        if(!user){
            return res.status(400).json({
                success: false,
                message: 'User not registered'
            });
        }

        //if a registered user-- verify the password and generate a jwt token
        const payload = {
            email: user.email,
            id: user._id, //we have passed this id because by using this id every data of the user can be extracted
            role: user.role
        }
        if(await bcrypt.compare(password, user.password)){
            //if password matches--- generate a jwt token
            let token = jwt.sign(payload,
                process.env.JWT_SECRET,
                {
                    expiresIn: '24h'
                }
            );
            console.log(token);
            user.token = token; //we have made a field named token inside user object and stored the token inside that
            user.password = undefined; //to hide the password from the user object

            //sending response
            return res.status(200)
            .header('Authorization', `Bearer ${token}`)
            .json({
                success: true,
                user,
                message: "Login Successful"
            })
        }
        else{
            //if password doesn't match
            return res.status(400).json({
                success: false,
                message: "Password Incorrect"
            })
        }


    }
    catch(err){
           console.log(err);
           return res.status(500).json({
            success: false,
            message: 'Login Failure'
           })
    }
}