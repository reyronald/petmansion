import Head from 'next/head'

import { AppProps } from 'next/dist/next-server/lib/router/router'

import '../styles/reset.css'
import '../styles/globals.css'

// https://nextjs.org/docs/basic-features/typescript#custom-app
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My new cool app</title>

        <title>Pet Mansion</title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
        <meta name="application-name" content="Pet Mansion" />
        <meta
          name="description"
          content="Hotel y peluquería para perros libre de jaulas en Santo Domingo, República Dominicana"
        ></meta>

        <meta property="og:title" content="Pet Mansion"></meta>
        <meta
          property="og:description"
          content="Hotel y peluquería para perros libre de jaulas"
        ></meta>
        <meta
          property="og:image"
          content="/branding/logo-petmansion.jpg"
        ></meta>
        <meta property="og:url" content="https://petmansion.com.do/"></meta>

        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:image:alt" content="Logo"></meta>

        <link rel="icon" href="/branding/dog face small.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
