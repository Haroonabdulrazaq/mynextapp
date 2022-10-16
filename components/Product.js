import React from 'react'

const Product = ({product}) => {
  return (
    <div>
      <h2>{product.id} {product.title}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}

export default Product