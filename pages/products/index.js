import React from 'react'
import Link from 'next/link'

const ProductlList = () => {
  return (
    <>
      <div>
        <Link href='/'>Home</Link>
      </div>
      <div>
        <Link href='/products/890'>ProductlList Page 890</Link>
      </div>
      <div><Link href='/products/909'>ProductlList Page 909</Link></div>
      <div><Link href='/products/901'>ProductlList Page 901</Link></div>
    </>
  )
}

export default ProductlList