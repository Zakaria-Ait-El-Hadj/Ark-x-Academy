
const { body, validationResult } = require('express-validator');
require('dotenv').config();


const loggingMiddleware = (req,res,next) => {
    const method = req.method;
    const path = req.path;
 
    console.log("Method of the request is : ",method ,"\nPath of the request is : ",path);
    next();
 }

const errorMiddleware = (err,req,res,next) => {
    err.message = err.message || 'error';
    err.statusCode = err.statusCode || 500;  
    
    res.status(err.statusCode).json({message : err.message});
}

const getUsersValidationRules = () => {
    return [
        body('username').trim().isLength({ min: 5 }).escape(), 
        body('password').trim().isLength({ min: 5 }).escape(), 
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        }
    ];
  };

const sessionVerification = (req,res,next) => {
    const sessionId = req.sessionID;
    const cookieId = req.cookies['connect.sid'].split(':')[1].split('.')[0];
    if ( sessionId !== cookieId){
        const err = new Error('You are not authorized');
        err.statusCode = 401;
        throw err;
    }
    else{
        next();
    }
}




module.exports = {
    loggingMiddleware,
    errorMiddleware,
    getUsersValidationRules,
    sessionVerification
}