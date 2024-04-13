import React , { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deletePosts , updatePosts } from '../states/postsSlice';


function blogcard({post}) {
  
  const dispatch = useDispatch();
 const postId = post._id;

  const [ isEditing , setEditing] = useState(false);
  const [editedPost , setEditedPost] = useState(
    {postId: post._id,
    title: post.title,
    content: post.content,
    author: post.author,
    category: post.category,}
  );

  function handleInputChange(event){
     const {name,value}= event.target;
     setEditedPost(previousState => ({...previousState, [name] : value}) );
    }

   function deletePost(){
    dispatch(deletePosts(postId));
  }

   function updatePost(){
    dispatch(updatePosts(editedPost));
    setEditing(false);
  }

  return (
    <div className='w-1/3 mx-4 px-8 py-8 flex-col mb-8 border rounded-3xl'>
        {isEditing ? (
        <div>
          <label className='font-bold ' htmlFor="editedTitle">Title:</label>
          <input className="border-2 mt-2" id='editedTitle' name='title' type='text' value={editedPost.title} onChange={handleInputChange} />
          <label className='font-bold ' htmlFor="editedcontent">Description:</label>
          <input className='border-2 my-2' id="editedcontent" name='content' type='text' value={editedPost.content} onChange={handleInputChange} />
          <label className='font-bold ' htmlFor="editedAuthor">Author:</label>
          <input className='border-2 my-2' id="editedAuthor" name='author' type='text' value={editedPost.author} onChange={handleInputChange} />
          <label className='font-bold ' htmlFor="editedCategory">Description:</label>
          <input className='border-2 my-2' id="editedCategory" name='category' type='text' value={editedPost.category} onChange={handleInputChange} />
          <button className='bg-blue-500 px-4 py-2 rounded-lg align-center justify-center' type="button" onClick={updatePost}>Save</button>
        </div>
      ) : (
        <div>
          <h2><b>Title</b> : {post.title}</h2>
          <p><b>Description</b> : {post.content}</p>
          <h2><b>Author</b> : {post.author}</h2>
          <p><b>Category</b> : {post.category}</p>
          <div className='flex gap-4 mt-4'>
            <button className='border-2 rounded-lg bg-blue-600 px-4 py-2' type='button' onClick={() => setEditing(true)}>
              Edit
            </button>
            <button className='border-2 rounded-lg bg-red-600 px-4 py-2' type='button' onClick={deletePost}>
              Delete
            </button>
          </div>
        </div>
      )}   
    </div>
  )
}

export default blogcard