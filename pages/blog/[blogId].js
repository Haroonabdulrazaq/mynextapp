import React from 'react'
import Head from 'next/head'

const Article = ({title, description}) => {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
    </Head>
      <div className='content'>Article</div>
    </>
  )
}

export default Article

export async function getServerSideProps(){
  return {
    props: {
      title: 'Article Title',
      description: 'Article Description'
    }
  }
}