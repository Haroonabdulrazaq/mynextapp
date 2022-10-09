import React from 'react'
import { useRouter } from 'next/router'

const Docs = () => {
  const router = useRouter()
  const {params} = router.query
  console.log(router);
  return (
    <h1>Docs Page</h1>
  )
}

export default Docs