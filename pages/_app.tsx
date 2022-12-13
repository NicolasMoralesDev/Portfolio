import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
          <link rel="icon" href="/icons8-class-dojo-16.png" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  )

}
