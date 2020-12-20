import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pet Mansion</title>
        <meta http-equiv="x-ua-compatible" content="ie=edge"></meta>
        <meta name="application-name" content="Pet Mansion" />
        <meta
          name="description"
          content="Hotel para perros libre de jaulas y peluquería"
        ></meta>

        <link rel="icon" href="/branding/dog face small.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.logo}>
          <Image
            src="/branding/logo-petmansion.png"
            width={1338}
            height={1242}
          />
        </div>
        <h1 className={styles.title}>Pet Mansion</h1>

        <p className={styles.description}>
          Visítanos en{' '}
          <img
            src="/instagram.png"
            alt="Instagram"
            width="504"
            height="504"
            className={styles.instagramLogo}
          />{' '}
          <a href="https://instagram.com/petmansion">@petmansion</a>
        </p>
      </main>
    </div>
  )
}
