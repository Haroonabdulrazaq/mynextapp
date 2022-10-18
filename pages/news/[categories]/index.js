import React from 'react'
import Link from 'next/link'

const Category = ({categories}) => {
  
  console.log(categories);

  return (
    <>
      <h1>Category</h1>
      <div>
        {
          categories.map((category)=>(
            <Link key={category.id} href={`/news/category/${category.id}`}>
              <div>
                <h2>{category.id}. {category.title} </h2>
                <p>{category.description}</p>
                <hr/>
              </div>
            </Link>
          ))
        }
      </div>
    </>
  )
}

export default Category

export async function getServerSideProps(context){
  const {params} = context
  const response = await fetch(`http://localhost:4000/news?category=${params.categories}`)
  const data = await response.json()

  return {
    props: {
      categories: data
    }
  }
}