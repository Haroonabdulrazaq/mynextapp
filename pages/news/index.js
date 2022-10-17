import React from 'react'
import Link from 'next/link'

const NewsArticleList = ({articles}) => {
  return (
    <>
      <h1>NewsArticleList</h1>
      <div>
        {
          articles.map((article) =>(
            <Link key={article.id} href={`/news/${article.category}`}>
              <h2> {article.id} {article.title} | {article.category} </h2>
            </Link>
          ))
        }
      </div>
    </>

  )
}

export default NewsArticleList

export async function getServerSideProps(){
 const response = await fetch('http://localhost:4000/news')
 const data = await response.json()

 return {
  props: {
    articles: data
  }
 }
}