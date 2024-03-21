import React from 'react'

function blogcard(posts) {
    
  return (
    <div>
        <h2>{posts.title}</h2>
        <p>{posts.description}</p>
    </div>
  )
}

export default blogcard