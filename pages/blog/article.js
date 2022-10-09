import React from 'react'
import { useRouter } from 'next/router'

const Article = () => {
  const router = useRouter()
  return (
    <h1>Article Page {router.id}</h1>
  )
}

export default Article