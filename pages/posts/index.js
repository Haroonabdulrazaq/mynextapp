import React from 'react'
import Link from 'next/Link'

const PostList = ({posts}) => {
  return (
    <>
      <h1>All Posts</h1>
      {posts.map((post)=>(
        <div key={post.id}>
          <Link href={`posts/${post.id}`} passHref>
            <h2>{post.id}  {post.title}</h2>
          </Link>
            <hr/>
        </div>
      ))}
    </>
  )
}

export default PostList

export async function getStaticProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  return {
    props: {
      posts: data.slice(0,3),
    }
  }
}