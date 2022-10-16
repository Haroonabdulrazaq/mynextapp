import React from 'react'
import { useRouter } from 'next/router'

const Post = ({post}) => {
  const router = useRouter()

  if(router.isFallback){
    return <h2>Loading...</h2>
  }
  return (
    <>
      <h1>Post Detail page</h1>
      <div>
        <h2>{post.id} {post.title}</h2>
        <p>{post.body}</p>
      </div>
    </>
  )
}

export default Post

export async function getStaticPaths() {
  const repsonse = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await repsonse.json()
  
  return {
    paths: [
      {
        params: {
          postId: '1'
        }
      }
    ],
    fallback: true, // can also be true or 'blocking'
  }
}


export async function getStaticProps(context){
  const {params} = context
  const repsonse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const data = await repsonse.json()

  if(!data.id) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      post: data
    }
  }
}