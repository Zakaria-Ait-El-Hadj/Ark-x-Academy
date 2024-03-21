import React from 'react'
import Blogcard from './blogcard'

function Main({posts}) {
  return (
    <main>
      {
        posts.length > 0 ?
      posts.map((post,index) => <Blogcard key={index} title={post.title} description={post.description}/> )
       : <p>No posts available</p>
      }
       
    </main>
  )
}

export default Main