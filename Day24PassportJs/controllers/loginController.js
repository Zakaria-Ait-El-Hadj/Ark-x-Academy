const model = require('../models/login');
require('dotenv').config();


const createAccount = async (req,res,next) =>{
    try{
      const user = await model.createAccount(req.body);
      if(user){
        res.send('The user was created successfully');
      }
      else{
        const err = new Error('User account creation failed');
            err.statusCode = 404;
            throw err;
      }
    }catch(err){
      next(err);
    }
}

const logout = (req,res,next) => {
  try {
    req.logout(function(err) {
      if (err) {
        return next(err);
      }
      res.send("Logged out successfully");
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
    createAccount,
    logout
}