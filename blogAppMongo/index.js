const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const authRouter = require('./router/authRoutes');
const postRouter = require('./router/postRoutes');
const {log , errorHandling} = require('./middleware/global');
const passport = require('passport');
require('dotenv').config();

const PORT = process.env.PORT;
const uri = process.env.MONGODB_URI;
const app = express();

app.use(express.json());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
  }));
  
 // Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(uri)
.then(() => console.log("Database connected successfully"))
.catch((err) => console.log("Error trying to connect to database :" , err));

app.use(log);


app.use('/user', authRouter);
app.use('/posts',postRouter);

app.use(errorHandling);

app.listen(PORT , ()=> console.log("Express server connected"));