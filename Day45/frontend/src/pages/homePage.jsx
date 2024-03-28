import React, { useState } from 'react'
import Blogcard from '../components/blogcard'

function HomePage({posts}) {

  const [posts2 , setPosts2] = useState(posts);

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

export default HomePage