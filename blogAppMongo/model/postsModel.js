const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title : {type : String , required : true , minLength : [4 , 'Title must be at least 4 characters long!'] },
    content : {type :String , required : true , minLength : [10 , 'Content must be at least 10 characters long!'] },
    author : {type : String , required : true , minLength : [3 , 'Author must be at least 4 characters long!'] },
    category : {type : String , required : true , minLength : [3 , 'Category must be at least 3 characters long!'] },
    createdAt : {type : Date},
    updatedAt : {type : Date},
    userId : {type : String}
})


//timestamping middlewares 
postSchema.pre('save' , function(next){
   this.createdAt = new Date();
   next(); 
}); 
postSchema.pre('findOneAndUpdate' , function(next){
    this._update.updatedAt = new Date();
    next();
});

const postModel = mongoose.model('Post',postSchema , 'posts');

module.exports = {postModel}