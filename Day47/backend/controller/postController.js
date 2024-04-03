const {postModel} = require('../model/postsModel');

const getAllPosts = async (req,res,next) => {
    try{
       
       const query = req.query;
       const page = query.page;
       const limit = query.limit;

       delete query.page;
       delete query.limit;

       const posts = await postModel.find(query).skip((page - 1) * limit).limit(limit);
       if(posts.length > 0){
        res.status(200).send(posts);
       }else{
        res.send("There is no posts available");
       }
    }catch(err){
        next(err);
    }
}

const getPost = async (req,res,next) => {
    try{
        if(req.user.role === 'user'){
            req.query.userId = req.user.id;
        }

       const query = req.query;
       const page = query.page;
       const limit = query.limit;

       delete query.page;
       delete query.limit;

       const posts = await postModel.find(query).skip((page - 1) * limit).limit(limit);
       if(posts.length > 0){
        res.status(200).send(posts);
       }else{
        res.send(null);
       }
    }catch(err){
        next(err);
    }
}

const addPost = async (req,res,next) => {
    try{
        req.body.userId = req.user.id;
        const data = req.body;     
        const newPost = new postModel(data)
        const post = await newPost.save();
        res.status(201).send(post);
    }catch(err){
        next(err);
    }
}

const updatePost = async(req,res,next) => {
    try{
        const data = req.body;
        const id = req.params.id;
        const exists = await postModel.exists({_id : id});
       if(exists){
        if(req.user.role === 'user'){
            const updatedPost = await postModel.findOneAndUpdate({_id : id , userId : req.user.id} , data, {new : true});
            res.send(updatedPost);
        }else{
            const updatedPost = await postModel.findOneAndUpdate({_id : id} , data, {new : true});
            res.send(updatedPost);
        }    
       }else{
        res.send("No post found with the provided ID");
    }       
    }catch(err){
        next(err); 
    }
}

const deletePost = async(req,res,next) => {
    try{
       const id = req.params.id;
       const exists = await postModel.exists({_id : id});
       if(exists){
        if(req.user.role ==="user"){
            const deletedPost = await postModel.deleteOne({_id : id , userId : req.user.id});   
            res.send(deletedPost);
        }else{
            const deletedPost = await postModel.deleteOne({_id : id});   
            res.send(deletedPost);
        }   
       }
       else{
        res.send("No post found with the provided ID");
       }
    }catch(err){
        next(err);
    }
}


module.exports = {getPost , addPost , updatePost , deletePost , getAllPosts}

