import React from 'react'
import { useRouter } from 'next/router'

import Product from '../../../components/Product'

const ProductDetail = ({product}) => {
  const router = useRouter()
  // const {productId} = router.query
  if(router.isFallback){
    return <div>Loading... </div>
  }
  return (
    <Product product={product}/>
  )
}

export default ProductDetail

export async function getStaticProps(context){
  const {params} = context
  const response = await fetch(`http://localhost:4000/products/${params.productId}`)
  const data = await response.json()

  return {
    props: {
      product: data
    }
  }
}

export async function getStaticPaths(){
  return {
    paths: [{ params:{productId: '1'}}],
    fallback: true
  }
}