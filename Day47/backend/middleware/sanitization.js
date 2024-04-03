const {body , validationResult} = require('express-validator');


function sanitizePost() {
    return[
        body('title').trim().isLength({min : 4}).escape(),
        body('content').trim().isLength({min : 10}).escape(),
        body('author').trim().isLength({min : 3}).escape(),
        body('category').trim().isLength({min : 3}).escape(),
        (req,res,next) => {
            const err = validationResult(req);
            if(!err.isEmpty()){
                next(err);
            }
            next();
        }
    ];
}

function sanitizeUserRegister(){
    return[
        body('username').trim().isLength({min : 3}).escape(),
        body('password').trim().isLength({min : 8}).escape(),
        body('email').trim().isEmail().escape(),
        // body('age').trim().isInt().notEmpty().escape(),
        // body('role').trim().isLength({min : 3}).escape(),
        (req,res,next) => {
            const err = validationResult(req);
            if(!err.isEmpty()){
                console.log('h')
                next(err);
            }
            next();
        }
    ];
}

function sanitizeUserLogin(){
    return[
        body('email').trim().isLength({min : 3}).escape(),
        body('password').trim().isLength({min : 8}).escape(),
        (req,res,next) => {
            const err = validationResult(req);
            if(!err.isEmpty()){
                next(err);
            }
            next();
        }
    ];
}

module.exports = {sanitizePost , sanitizeUserRegister , sanitizeUserLogin}

