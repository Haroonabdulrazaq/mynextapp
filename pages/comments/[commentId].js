import React from 'react'
import { useRouter } from 'next/router'
import { comments } from '../../data/comments'

const CommmentDetail = ({comment}) => {
const router = useRouter()

if(router.isFallback){
  return <h2>Loading...</h2>
}
  return (
    <>  
      {comment.id} - {comment.text}
    </>
  )
}

export default CommmentDetail

export async function getStaticPaths(){
  return {
    paths: [
      { params: {commentId: '1'} },
      { params: {commentId: '2'} },
      { params: {commentId: '3'} },
    ],
    fallback: true
  }
}

export async function getStaticProps(context) {
  const {params} = context
  const {commentId} = params
  const comment = comments.find((comment)=> comment.id === parseInt(commentId) )
  return {
    props: {
      comment,
      commentId
    }
  }
}

