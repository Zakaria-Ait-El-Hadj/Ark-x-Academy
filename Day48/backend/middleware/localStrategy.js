const passport = require('passport');
const local = require('passport-local').Strategy;
const userModel = require('../model/usersModel');
const bcrypt = require('bcrypt');

passport.serializeUser((user , done) => {
    done(null,{id : user.id , role : user.role});
});

passport.deserializeUser((data , done) =>{
    done(null,data)
})

passport.use(new local( {usernameField: 'email'},
   async function(email,password,done){
    try{
        const user = await userModel.findOne({ email: email });       
        if(user === null){
            console.log("user null")
            return done(null , false , { message: 'Email not found' });
        }
        const passwordMatch = await bcrypt.compare(password , user.password);
        if(passwordMatch){
            console.log("matched")
          return done(null,user)
        }
        else{ 
            console.log('3')
            return done(null, false , { message: 'Incorrect password' }) ;
        }   
    }catch(err){
        console.log("err in passport login");
       return done(err);
    }
   }
));

passport.use('register',new local({passReqToCallback : true},
    async function(req,username,password,done){
        try{
       const email = req.body.email;
       const age = req.body.age;
       const role = req.body.role;
       const hashedPassword = await bcrypt.hash(password,10);
       const data = {username : username , password : hashedPassword , email : email , age : age , role : role};
       const createdUser = await userModel.create(data);
       return done(null,createdUser);
        }catch(err){
            if (err.code === 11000) {
                const error = new Error('This username or email already exists'); 
                return done(error);
            }
            return done(err);
        }
    }
))

module.exports = passport