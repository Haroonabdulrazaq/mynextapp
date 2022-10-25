import 'styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/layout.css'
import Head from 'next/head';

import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return <>
    <Head>
      <title>Haroon Abdulrazaq</title>
      <meta name='description' content='This project is about learning Next.js' />
    </Head>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default MyApp
