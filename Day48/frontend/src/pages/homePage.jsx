import React, { useEffect } from 'react'
import Blogcard from '../components/blogcard'
import { getPosts } from '../states/postsSlice';
import { useSelector, useDispatch } from 'react-redux';


function HomePage() {
  
  const posts = useSelector((state) => state.posts.posts); 
  const isLoading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return(
    <main> 
      <div className='w-full flex flex-wrap mt-8 '>

      {isLoading ? (
      <p>Loading data...</p>
    ) : error ? (
      <p class="text-red-500 font-semibold mx-auto">{error}</p>
    ) : (
      posts && posts.length > 0 ? (
        posts.map(post => <Blogcard key={post._id} post={post} />)
      ) : (
        <p>No posts available</p>
      ) 
    )}
      </div>
    </main>
  )
}

export default HomePage