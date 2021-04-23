const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


exports.signup = (req, res) =>{
    User.findOne({email: req.body.email})
    .exec(async (error, user) =>{
        if(user) return res.status(400).json({
            error: "User is already registered"
        });

        const{
            firstName,
            lastName,
            email,
            password
        } = req.body;
        const hash_password = await bcrypt.hash(password, 10);
        const _user = new User({
            firstName,
            lastName,
            email,
            hash_password,
            username: Math.random().toString()
        });

        _user.save((error, data) =>{
            if(error) {
                return res.status(400).json({
                    
                message: "Something Is Wrong with signup.",
                //console.log(error)                       
                });
            }
            if(data){
                return res.status(200).json({
                    message: "User created succesfuly!",
                    //user: data
                });
            }
        });

    });
}

exports.signin = (req, res) =>{
    User.findOne({email: req.body.email})
    .exec(async(error, user) =>{
        if(error) return res.status(400).json({error});
        if(user){
            const isPassword = await user.authenticate(req.body.password);
            if( isPassword &&
               ( user.authenticate(req.body.password) && user.role === "user")){
                const token = jwt.sign({_id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: "1d"})
                const{_id, firstName, lastName, email, role, fullName}= user;
                res.status(200).json({
                    token,
                    user:{_id, firstName, lastName, email, role, fullName}
                });

            }
            else{
                return res.status(400).json({
                message: "Invalid Password / If admin you have no access."});
            }
        }
        else{
            return res.status(400).json({
            message: "Something Is Wrong with auth."});
        }
    });
}

