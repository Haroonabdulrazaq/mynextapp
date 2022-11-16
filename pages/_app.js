import 'styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/layout.css'
import Head from 'next/head';
import '../components/Navbar.css'
import { SessionProvider } from "next-auth/react"

import Navbar from '../components/Navbar.js'
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

function MyApp({ Component, pageProps: { session, ...pageProps}, }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return <>
    <SessionProvider session={session}>
      <Head>
        <title>Haroon Abdulrazaq</title>
        <meta name='description' content='This project is about learning Next.js' />
      </Head>
      <Navbar/>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </SessionProvider>
  </>
}

export default MyApp
