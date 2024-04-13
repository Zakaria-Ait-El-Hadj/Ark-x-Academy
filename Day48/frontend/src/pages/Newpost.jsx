import { useState } from "react"
import { useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from "zod";
import { useNavigate } from 'react-router-dom';
import { addPosts } from "../states/postsSlice";
import { useDispatch } from 'react-redux';

function Newpost() {

   const [newPost , setNewPost] = useState({title : '' , description : '' , author : '' , category : ''});
   const [success , setSuccess] = useState(false);
   const navigate = useNavigate();
   const dispatch = useDispatch();


   const schema = z.object({
     title : z.string().min(3).max(20),
     description : z.string().min(8).max(500),
     author : z.string().min(3).max(20),
     category : z.string().min(3).max(20)
   });

   const {register , handleSubmit , formState : { errors , isSubmitting } } = useForm( {resolver :zodResolver(schema) });



  function handleInputChange(event){
    const {name , value} = event.target;
    setNewPost(prvState => ({...prvState , [name]: value}));
  } 

  async function submit(data){
    const { title, description, author, category } = data;      
        dispatch(addPosts({title : title, content : description, author : author, category : category}));
        setSuccess(true);
        navigate('/');
  }

  return (
  
      <div >  
      <form className='flex flex-col rounded-2xl border-2 px-4 py-4 w-fit h-fit ml-8 mt-8' onSubmit={handleSubmit(submit)}>
      <label htmlFor="title">Title:</label>
      <input {...register('title')} id="title" name='title' type='text' value={newPost.title} onChange={handleInputChange} className='border' /><br/>
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      <label htmlFor="description">Description:</label>
      <input {...register('description')} id='description' name='description' type='text' value={newPost.description} onChange={handleInputChange} className='border'/><br/>
      {errors.description && <p className="text-red-500">{errors.description.message}</p>}
      <label htmlFor="author">Author:</label>
      <input {...register('author')} id='author' name='author' type='text' value={newPost.author} onChange={handleInputChange} className='border'/><br/>
      {errors.author && <p className="text-red-500">{errors.author.message}</p>}
      <label htmlFor="category">Category:</label>
      <input {...register('category')} id='category' name='category' type='text' value={newPost.category} onChange={handleInputChange} className='border'/><br/>
      {errors.category && <p className="text-red-500">{errors.category.message}</p>}
      <button className="border bg-blue-500 rounded-2xl py-2 px-4" type='submit'>{isSubmitting ? 'Loading...' : 'Add Post'}</button><br/>
      {success ? <p className="text-green-500">Post added successfully</p> : ''}
      </form>
      </div>

  )
}

export default Newpost