import React, { useState } from 'react'
import Blogcard from './blogcard'
import RegistrationPage from '../pages/registrationPage';

function Main({posts , isLoggedIn , changeAuth}) {
  const [newPost , setNewPost] = useState([{title : '' , description : ''}]);
  const [posts2 , setPosts2] = useState(posts);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewPost(prevState => ({...prevState,  [name]: value}) );
  }

  function addPost(){
    if(newPost.title && newPost.description) {
      setPosts2(p => [...p ,  newPost]);
      setNewPost({ title: '', description: '' });
    }
    else{
      alert('Please provide both title and description')
    }
   
  }

  function deletePost(key) {
    const newPosts = posts2.filter((post , i) => i !== key);
    setPosts2(newPosts);
  } 

  function editPost(key , updatedPost) {
   let post = posts2.map((p , i) => {
   if (i === key) {
    return updatedPost;
   }
   return p;
    }
  );
  setPosts2(post);
  }

  return(
    <main>

      {
        isLoggedIn ? 
        <>

      <div className='flex flex-col rounded-2xl border-2 px-4 py-4 w-fit h-fit ml-8 mt-8'>  
      <label htmlFor="title">Title:</label>
      <input id="title" name='title' type='text' value={newPost.title} onChange={handleInputChange} className='border' /><br/>
      <label htmlFor="description">Description:</label>
      <input id='description' name='description' type='text' value={newPost.description} onChange={handleInputChange} className='border'/><br/>
      <button type='button' onClick={addPost}>Add Post</button><br/>
      </div>
      <div className='flex flex-wrap mt-8'>
      {
        posts2.length > 0 ?
      posts2.map((post,index) => <Blogcard 
                                 key={index} 
                                 post={post} 
                                 onDelete={() => deletePost(index)}  
                                 onEdit={(updatedPost) => editPost(index, updatedPost)}/> )
       : <p>No posts available</p>
      }
      </div>
      
        
        </>
        
        : (
          <RegistrationPage changeAuth = {changeAuth}/>
        )
      }
      
       
    </main>
  )
}

export default Main