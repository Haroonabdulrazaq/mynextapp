import React from 'react'
import Link from 'next/link'
// import '../styles/layout.css'

const Header = () => {
  return (
    <div className='layout-header'>
      <Link href="/">
        <a >Home</a>
      </Link>
      {' '}<Link href="/about">
        <a >About</a>
      </Link>
      {' '}
      <Link href="/blog/1">
        <a >Article</a>
      </Link>
      {' '}
      <Link href="/comments">
        <a >Comments</a>
      </Link>
    </div>
  )
}

export default Header