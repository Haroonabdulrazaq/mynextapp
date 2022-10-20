import React, { useState } from 'react'


const CommentPage = () => {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  const fetchComments = async ()=>{
    const response = await fetch('/api/comments')
    const data = await response.json()

    setComments(data)
  }
  
  const submitComment = async (e)=>{
    e.preventDefault()
    const response = await fetch('/api/comments',{
      method: 'POST',
      body: JSON.stringify({comment}),
      headers: {
        'Content-Type': 'application/json'
      },
    })

    const data = await response.json()
    setComment('')
    fetchComments()
    console.log(data)
  }

  const handleDelete= async (id)=>{
    console.log('id here', id);
    // comments =  comments.filter((comment)=> comment.id !== id)
    // setComments(comments)
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE'
    })
    const data = await response.json()

    console.log(data);
    fetchComments()
  }

  return (
    <>
    <input type="text" value={comment} onChange={ (e)=>setComment(e.target.value)} />
    <button onClick={submitComment} className='btn btn-primary'>Submit Comment</button>
    <hr />
    <button onClick={fetchComments} className='btn btn-primary'>Load comments</button>
      <h2>List of comments</h2>
        {
          comments.map((comment)=>(
            <div key={comment.id}>
              <h2>{comment.id} - {comment.text} </h2>
              <button onClick={()=>handleDelete(comment.id)} className='btn-primary'>Delete</button>
              <hr />
            </div>
          ))
        }
    </>
  )
}

export default CommentPage