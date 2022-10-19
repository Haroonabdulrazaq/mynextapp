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
    console.log(data)
  }

  return (
    <>
    <input type="text" value={comment} onChange={ (e)=>setComment(e.target.value)} />
    <button onClick={submitComment}>Submit Comment</button>
    <hr />
    <button onClick={fetchComments}>Load comments</button>
      <h2>List of comments</h2>
        {
          comments.map((comment)=>(
            <div key={comment.id}>
              <h2>{comment.id} - {comment.text} </h2>
              <hr />
            </div>
          ))
        }
    </>
  )
}

export default CommentPage