import React from 'react'
import Head from 'next/head'
import Header from '../components/layout/Header'

const About = () => {
  return (
    <>
    <Head>
      <title>About Haroon Abdulrazaq</title>
      <meta name='description' content='This project is about learning Next.js' />
    </Head>
    <h2 className='content'>About</h2>
    </>
  )
}

export default About

About.getLayout = function PageLayout(page){
  return(
    <>
      <Header/>
      {page}
    </>
  )
}
