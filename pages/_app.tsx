import { AppProps } from 'next/dist/next-server/lib/router/router'

import '../styles/reset.css'
import '../styles/globals.css'

// https://nextjs.org/docs/basic-features/typescript#custom-app
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
