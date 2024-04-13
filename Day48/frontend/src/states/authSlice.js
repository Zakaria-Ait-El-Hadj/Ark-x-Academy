import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const loginUrl = 'http://localhost:3000/user/login';
const registerUrl = 'http://localhost:3000/user/register';
const logoutUrl = "http://localhost:3000/user/logout";

const initialState = {
    isLoggedIn: false,
    loading: false,
    error: null,
  };

const authSlice = createSlice({
   name : 'auth',
   initialState,
   reducers :{},
   extraReducers : (builder) => {
   // get posts
   builder.addCase(login.fulfilled , (state , action) => {
    state.isLoggedIn = action.payload;
    state.loading = false;
    state.error = null;
    console.log(action)
 })
 .addCase(login.pending , (state) => {
    state.loading = true;
    state.error = null;
 })
 .addCase(login.rejected , (state , action) => {
    state.loading = false;
    state.error = action.error.message;
    console.log(state.error)
 })
  //register
   .addCase(myRegister.fulfilled , (state , action) => {
    state.loading = false;
    state.error = action.error.message;
    console.log(state.error)
 })
 .addCase(myRegister.pending , (state) => {
    state.loading = true;
    state.error = null;
    console.log(state.error)
 })
 .addCase(myRegister.rejected , (state , action) => {
    state.loading = false;
    state.error = action.error.message;
    console.log(state.error.message)
 })
  //logout
   .addCase(logout.fulfilled , (state , action) => {
    state.isLoggedIn = action.payload;
    state.loading = false;
    state.error = null;
 })
 .addCase(logout.pending , (state) => {
    state.loading = true;
    state.error = null;
 })
 .addCase(logout.rejected , (state , action) => {
    state.loading = false;
    state.error = action.error.message;
 })
}
});

export const login = createAsyncThunk(
    "auth/login",
    async function fetch ({email , password}) {
      try{
        const response = await axios.post(loginUrl ,
            {
                email : email,
                password : password
            },
            {withCredentials : true}); 
            console.log(response)

        return true;   
      }
      catch(e){
        console.log(e)
        if (e.response && e.response.data.error.message) {
            console.log('j')
            throw e.response.data.error.message;
        } else {
            console.log('h')
            throw e;
        }  
      }
    }
)

export const myRegister = createAsyncThunk(
    "auth/myRegister",
    async function fetch ({username ,email , password }){
        try{
            const response = await axios.post(registerUrl ,
                {
                    username : username,
                    email : email,
                    password: password
                } , {withCredentials : true}
                )
                console.log(response)
            return response.data;
        }
        catch(error){
            if (error.response.data.error) {
                throw error.response.data.error;
            } else {
                throw error;
            }  
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async function fetch(){
        try{
            const response = await axios.get(logoutUrl , {withCredentials : true});
            if(response.data.errors){
                return new Error('Error trying to log out');
            }
            return false;
        }
        catch(err){
            return err;
        }
    }
)


export default authSlice.reducer;