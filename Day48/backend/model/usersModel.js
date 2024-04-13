const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {type : String , required : true , unique : true , lowercase: true , minLength : [3 , 'Name must be at least 3 characters long!'] },
    password : {type : String , required : true , validate : {
        validator : function(value){
           const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
           return passwordRegex.test(value);
        },
        message : 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number'
    }},
    email : {type : String , required : true , unique : true , lowercase : true , validate : {
        validator : function(value){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
        },
        message : 'Email must be in a valid format'
    }
    },
    age : {type : Number},
    role : {type : String , default : 'user'}
 });

const userModel = mongoose.model('User',userSchema ,'users');

module.exports = userModel;