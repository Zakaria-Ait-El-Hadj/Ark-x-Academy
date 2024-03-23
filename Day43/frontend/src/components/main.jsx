import React, { useState } from 'react'
import Blogcard from './blogcard'

function Main({posts}) {
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
       <label htmlFor="title">Title:</label>
      <input id="title" name='title' type='text' value={newPost.title} onChange={handleInputChange} /><br/>
      <label htmlFor="description">Description:</label>
      <input id='description' name='description' type='text' value={newPost.description} onChange={handleInputChange} /><br/>
      <button type='button' onClick={addPost}>Add Post</button><br/>
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
      
       
    </main>
  )
}

export default Main