import React from 'react'


const Article = ({article}) => {
  return (
    <div>
      <h2>{article.id} | {article.title}</h2>
      <p>{article.description}</p>
    </div>
  )
}

export default Article;

export async function getServerSideProps(context){
  const {params} = context
  const response = await fetch(`http://localhost:4000/news/${params.categoryId}`)
  const data = await response.json()

  return {
    props: {
      article: data
    }
  }
}