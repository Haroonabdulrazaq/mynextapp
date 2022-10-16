import React from 'react'
import Link from 'next/link'
// import Product from '../../components/Product'

const ProductlList = ({products}) => {

  return (
    <>
      {products.map((product)=> (
        <Link href={`products/${product.id}`} key={product.id} passHref>
          <h2>{product.id} {product.title} {product.price}</h2>
        </Link>
      ))}
    </>
  )
}

export default ProductlList

export async function getStaticProps(){
  console.log('Generaring or regerating Data');
  const response = await fetch('http://localhost:4000/products')
  const data = await response.json()

  return {
    props:{
      products: data,
    },
    revalidate: 10,
  }
}
