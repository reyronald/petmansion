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

        <link rel="icon" href="/branding/dog face small.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
