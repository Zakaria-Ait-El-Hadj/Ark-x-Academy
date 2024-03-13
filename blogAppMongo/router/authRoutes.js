const express = require("express");
const router = express.Router();
const controller = require('../controller/authController');
const {sanitizeUserRegister , sanitizeUserLogin} = require('../middleware/sanitization');
const passport = require('passport');
require("../middleware/localStrategy");

router.post('/register' , sanitizeUserRegister() ,passport.authenticate('register') , (req,res,next) => {res.send("Account created successfully")} );
router.post('/login' ,sanitizeUserLogin() , passport.authenticate('local') , (req,res,next) => {res.send("logged in successfully")} );
router.get('/logout' , controller.logout);

module.exports = router;