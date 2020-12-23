import React from 'react'
import Image from 'next/image'

import { Map } from '../components/Map'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import { InstagramIcon } from '../components/InstagramIcon'

import styles from '../styles/Home.module.css'
import buttonStyles from '../styles/Button.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.logo}>
            <Image
              src="/branding/logo-petmansion-transparent.png"
              width={1338}
              height={1242}
            />
          </div>
          <h1 className={styles.title}>Pet Mansion</h1>

          <p className={styles.description}>
            Hotel y peluquería para perros libre de jaulas en Santo Domingo,
            República Dominicana
          </p>

          <div className={styles.links}>
            <a
              href="https://forms.gle/uDkVxnHQNnoygp5w8"
              className={buttonStyles.button}
            >
              Reservas para nuevos clientes
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=18293057334"
              className={buttonStyles.button}
            >
              <WhatsAppIcon style={{ marginRight: 7 }} /> WhatsApp
              1-829-305-7334
            </a>

            <a
              href="https://instagram.com/petmansion"
              className={buttonStyles.button}
            >
              <InstagramIcon style={{ marginRight: 7 }} /> @petmansion
            </a>
          </div>
        </main>
      </div>
      <Map />
    </>
  )
}
