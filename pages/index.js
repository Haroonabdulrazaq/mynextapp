import {useRouter} from 'next/router'
import React from 'react'
import Link from 'next/Link'

const Home = () => {
  const router = useRouter()

  const handleClick = ()=>{
    console.log('placing your order');
    router.push("/products")
  }
  return (
    <>
      <h1>Home Page</h1>
      <div> 
        <Link href="/blog">
        <a >Blog</a></Link>
      </div>
      <div> 
        <Link href="/products">
        <a>Products</a></Link>
      </div>
      <button onClick={handleClick}>Place Order</button>
    </>
  )
}

export default Home