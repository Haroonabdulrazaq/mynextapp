import React from 'react'

const Post = ({post}) => {
  return (
    <>
      <h1>Post Detail page</h1>
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </>
  )
}

export default Post

export async function getStaticPaths() {
  return {
    paths: [{ params: { postId: '1' } }, { params: { postId: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context){
  const {params} = context
  const repsonse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const data = await repsonse.json()

  return {
    props: {
      post: data
    }
  }
}