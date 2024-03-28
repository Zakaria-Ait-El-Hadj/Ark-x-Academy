import { useState } from "react"
import { useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from "zod";
import { useNavigate } from 'react-router-dom';



function Newpost({addPost , isLoggedIn}) {
   const [newPost , setNewPost] = useState({title : '' , description : ''});
   const [success , setsuccess] = useState(false);
   const navigate = useNavigate();

   const schema = z.object({
     title : z.string().min(3),
     description : z.string().min(8).max(255),
   });

   const {register , handleSubmit , formState : { errors , isSubmitting } } = useForm( {resolver :zodResolver(schema) });



  function handleInputChange(event){
    const {name , value} = event.target;
    setNewPost(prvState => ({...prvState , [name]: value}));
  } 

  function submit(){
    if(newPost.title && newPost.description){
        addPost(newPost);
        setNewPost({title : '' , description : ''});
        setsuccess(true);
        navigate('/');
    }
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
      <button className="border bg-blue-500 rounded-2xl py-2 px-4" type='submit'>{isSubmitting ? 'Loading...' : 'Add Post'}</button><br/>
      {success ? <p className="text-green-500">Post added successfully</p> : ''}
      </form>
      </div>

  )
}

export default Newpost