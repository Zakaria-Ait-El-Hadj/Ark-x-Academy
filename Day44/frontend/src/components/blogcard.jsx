import React , { useState } from 'react'

function blogcard({post , onDelete , onEdit}) {
  const [ isEditing , setEditing] = useState(false);
  const [editedPost , setEditedPost] = useState(post);

  function handleInputChange(event){
     const {name,value}= event.target;
     setEditedPost(previousState => ({...previousState, [name] : value}) );
    }

  function saveEdit(){
    onEdit(editedPost);
    setEditing(false);
  }

  return (
    <div className='w-fit mx-8 px-8 py-8 flex-col gap-8 mb-8 border rounded-3xl'>
        {isEditing ? (
        <div>
          <label htmlFor="editedTitle">Title:</label>
          <input id="editedTitle" name='title' type='text' value={editedPost.title} onChange={handleInputChange} /><br />
          <label htmlFor="editedDescription">Description:</label>
          <input id='editedDescription' name='description' type='text' value={editedPost.description} onChange={handleInputChange} /><br />
          <button type="button" onClick={saveEdit}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <div className='flex gap-4 mt-4'>
            <button className='border-2 rounded-lg' type='button' onClick={() => setEditing(true)}>
              Edit
            </button>
            <button className='border-2 rounded-lg' type='button' onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      )}   
    </div>
  )
}

export default blogcard