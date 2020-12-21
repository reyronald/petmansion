import React from 'react'
import Image from 'next/image'

import { Map } from '../components/Map'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
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
            Hotel y peluquería para perros libre de jaulas en Santo Domingo,
            República Dominicana
          </p>

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
      <Map />
    </>
  )
}
