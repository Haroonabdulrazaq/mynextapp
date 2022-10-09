import React from 'react'
import { useRouter } from 'next/router'

const ProductDetail = () => {
  const router = useRouter()
  const {productId} = router.query
  return (
    <h1>ProductDetail Page for ProductId {productId}</h1>
  )
}

export default ProductDetail