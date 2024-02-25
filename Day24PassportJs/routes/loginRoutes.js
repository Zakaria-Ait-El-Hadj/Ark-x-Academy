const express = require("express");
const router = express.Router();
const controller = require('../controllers/loginController');
const middleware = require('../middlewares/middlewares');
const passport = require('passport');
require('../middlewares/strategies');


router.post('/createuser' , middleware.getUsersValidationRules() , controller.createAccount);
router.post('/login' , middleware.getUsersValidationRules()  , passport.authenticate('local') , (req,res) =>{
    console.log("logged in");
    res.sendStatus(200);
} );
router.get('/logout' , controller.logout);

module.exports = router;