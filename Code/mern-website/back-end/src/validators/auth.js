
const { check, validationResult } = require("express-validator");

exports.validateSignupRequest = [
    check("firstName").notEmpty().withMessage("firstName is requierd"),
    check("lastName").notEmpty().withMessage("lastName is requierd"),
    check("email").isEmail().withMessage("Valid email is requierd"),
    check("password").isLength({min: 6}).withMessage("Password must be 6 chr."),
    ];

exports.validateSigninRequest = [
        
        check("email").isEmail().withMessage("Valid email is requierd"),
        check("password").isLength({min: 6}).withMessage("Password must be 6 chr."),
];

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length>0){
        return res.status(400).json({error: errors.array()[0].msg})
    }
    next();
}