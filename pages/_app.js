import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>User and Details</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="User Management Dashboard" />
        <meta name="keywords" content="User, Management, Dashboard, React, Vue.js, Next.js, Nuxt.js" />
        <meta name="author" content="Saksham Tolani" />
      </Head>
      <Component {...pageProps} />

    </>
  )
}
