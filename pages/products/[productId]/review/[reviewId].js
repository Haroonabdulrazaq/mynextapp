import React from 'react'
import { useRouter } from 'next/router'
import ProductDetail from '..';

const ReviewDetail = () => {
  const router = useRouter()
  const  {productId, reviewId} = router.query;
  // const reviewId = router.query.reviewId 
  return (
    <h1>Review Page Detail for Prodcut {productId} and Review {reviewId}</h1>
  )
}

export default ReviewDetail
