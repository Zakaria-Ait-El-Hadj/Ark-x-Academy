import React, { useState ,useEffect } from 'react'
import Blogcard from '../components/blogcard'

function HomePage({posts , fetchPosts , isLoading , error}) {

  const [posts2 , setPosts2] = useState(posts);

  function deletePost(key) {
    const newPosts = posts2.filter((post) => post._id!== key);
    setPosts2(newPosts);
  } 

  function editPost(key , updatedPost) {
   let post = posts2.map((p) => {
   if (p._id === key) {
    return updatedPost;
   } 
   return p;
   }
  );
  setPosts2(post);
  }

  useEffect(() => {
    fetchPosts();
  },[])

  useEffect(() => {
    // Update posts2 when isLoading becomes false
    if (!isLoading) {
      setPosts2(posts);
    }
  }, [isLoading, posts]);

  return(
    <main> 
      <div className='w-full flex flex-wrap mt-8 '>

      {isLoading ? (
      <p>Loading data...</p>
    ) : error ? (
      <p>Error: {error}</p>
    ) : (
      posts2.length > 0 ?
        posts2.map((post) => <Blogcard 
                                 key={post._id} 
                                 post={post} 
                                 onDelete={() => deletePost(post._id)}  
                                 onEdit={(updatedPost) => editPost(post._id, updatedPost)}/> ) 
       : <p>No posts available</p> // Example: Display data in a formatted way
    )}
      </div>
    </main>

  )

}

export default HomePage