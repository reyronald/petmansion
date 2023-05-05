import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'

import { AppProps } from 'next/dist/next-server/lib/router/router'

import '../styles/reset.css'
import '../styles/globals.css'

const description =
  'Hotel y peluquería para perros libre de jaulas. WhatsApp (829) 305-7334. Calle Angel Severo Cabral No. 63, Urb. Fernández, Santo Domingo, República Dominicana (R.D.)'

// https://nextjs.org/docs/basic-features/typescript#custom-app
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Pet Mansion - Hotel y peluquería para perros libre de jaulas
        </title>

        <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
        <meta name="application-name" content="Pet Mansion" />
        <meta name="description" content={description}></meta>

        <meta property="og:title" content="Pet Mansion" />
        <meta property="og:site_name" content="Pet Mansion" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://petmansion.com.do/" />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://petmansion.com.do/branding/logo-petmansion-900x900.png"
        />
        <meta property="og:image:alt" content="Logo" />
        <meta property="og:locale" content="es_DO" />

        <meta name="twitter:card" content="summary" />

        <link rel="icon" href="/branding/dog face small.ico" />

        <meta itemProp="telephone" content="(829) 305-7334" />
        <meta itemProp="priceRange" content="$" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp
