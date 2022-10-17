import React from 'react'
import Link from 'next/link'

const Category = ({categories}) => {
  
  console.log(categories);

  return (
    <>
      <div>Category</div>
      <div>
        {
          categories.map((category)=>(
            <Link key={category.id} href={`/news/category/${category.id}`}>
              <div>
                <h2>{category.id}. {category.title} </h2>
                <p>{category.description}</p>
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
  const response = await fetch(`http://localhost:4000/news`)
  const articles = await response.json()
  const data = articles.filter((article)=>  article.category === params.categories)

  return {
    props: {
      categories: data
    }
  }
}