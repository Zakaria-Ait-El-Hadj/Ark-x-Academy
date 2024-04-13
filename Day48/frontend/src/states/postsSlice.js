import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const postsUrl = 'http://localhost:3000/posts/getpost';
const addpostUrl = 'http://localhost:3000/posts/addpost';
const updatePostUrl = 'http://localhost:3000/posts/updatepost/';
const deletePostUrl = 'http://localhost:3000/posts/deletepost/';

const initialState = {
    posts: [],
    loading: false,
    error: null,
  };

const postsSlice = createSlice({
   name : "post",
   initialState,
   reducers: {},
   extraReducers : (builder) => {
    // get posts
     builder.addCase(getPosts.fulfilled , (state , action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = null;
        console.log('f')
     })
     .addCase(getPosts.pending , (state) => {
        state.loading = true;
        state.error = null;
     })
     .addCase(getPosts.rejected , (state , action) => {
        state.loading = false;
        state.error = action.payload.message;
        console.log('r')
     })
      // addPosts
     .addCase(addPosts.fulfilled , (state , action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = null;
     })
     .addCase(addPosts.pending , (state) => {
        state.loading = true;
        state.error = null;
     })
     .addCase(addPosts.rejected , (state , action) => {
        state.loading = false;
        state.error = action.payload.message;
     })
     //updatePosts
     .addCase(updatePosts.fulfilled , (state , action) => {
      const updatedPost = action.payload;
      state.posts = state.posts.map(post => post._id === updatedPost._id ? updatedPost : post);
      state.loading = false;
        state.error = null;
     })
     .addCase(updatePosts.pending , (state) => {
        state.loading = true;
        state.error = null;
     })
     .addCase(updatePosts.rejected , (state , action) => {
        state.loading = false;
        state.error = action.payload.message;
     })
    //deletePosts
    .addCase(deletePosts.fulfilled , (state , action) => {
        state.posts = state.posts.filter((post) => post._id !== action.payload);
        state.loading = false;
        state.error = null;
     })
     .addCase(deletePosts.pending , (state) => {
        state.loading = true;
        state.error = null;
     })
     .addCase(deletePosts.rejected , (state , action) => {
        state.loading = false;
        state.error = action.payload.message;
     })

   }
});

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async function fetchPosts () {
    try{
      const response = await axios.get(postsUrl , {withCredentials : true});  
      console.log(response);
      return response.data;   
    }
    catch(e){
        console.log(e)
      throw e;   
    }
  }
)

export const addPosts = createAsyncThunk(
  "posts/addPosts",
  async function fetchPosts ({title , content ,author , category}) {
    try{
        const response = await axios.post(addpostUrl , {
            title : title,
            content : content,
            author : author,
            category : category
          } , {withCredentials : true});  
          
        if(response.data === null){
            console.log('err')
            throw new Error('null')
          }
          return response.data;
    }
    catch(e){
        console.log(e.message)
      return e;   
    }
  }
)

export const updatePosts = createAsyncThunk(
  "posts/updatePosts",
   async function fetchPosts ({ postId , title , content , author , category}){
     try{
        const response = await axios.put(`${updatePostUrl}${postId}` ,
        {
          title : title ,
          content : content ,
          author : author ,
          category : category
        }, {withCredentials : true})
        if(response.data === null){
          console.log('err')
          throw new Error('null')
        }
        return response.data;
     }
     catch(err){
      console.log(e.message)
       return err;
     }
   }
)

export const deletePosts = createAsyncThunk(
  "posts/deletePosts",
  async function deletePost(postId){
    try{
      const response = await axios.delete( `${deletePostUrl}${postId}`, {withCredentials : true});
      if(response.data.errors){
        throw new Error('Error trying to delete the post');
      }
      return postId;
    }
    catch(err){
       return err;
    }
    }
)

export default postsSlice.reducer;