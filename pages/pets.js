import React from 'react'
import Image from 'next/image'
import img from '../public/1.jpg'

const PetsPage = () => {
  return (
    <>
      <div>
        {
          ['1','2','3','4','5'].map((path)=>(
            <div key={path}>
              <Image src={`/${path}.jpg`} placeholder='blur' blurDataURL='https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'  alt="pet" width='280' height='420' />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default PetsPage