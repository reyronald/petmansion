import React from 'react'
import Image from 'next/image'

import { Map } from '../components/Map'
import { PawIcon } from '../components/PawIcon'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import { InstagramIcon } from '../components/InstagramIcon'

import styles from '../styles/Home.module.css'
import buttonStyles from '../styles/Button.module.css'

// TODO optimize fonts
// TODO position svg paws absoolutely

export default function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.logo}>
            <Image
              priority
              src="/branding/logo-petmansion-circle-transparent.png"
              alt="logo"
              loading="eager"
              width={300}
              height={300}
            />
          </div>
          <h1 className={`font-brand ${styles.title}`}>
            <span className="color-text">Pet</span>
            <span className="color-text-brand-green">Mansion</span>
          </h1>

          <p className={styles.description}>
            Hotel y peluquería para perros libre de jaulas en Santo Domingo,
            República Dominicana
          </p>

          <div className={styles.links}>
            <a
              href="https://instagram.com/petmansion"
              className={buttonStyles.button}
            >
              <InstagramIcon style={{ marginRight: 7 }} /> @petmansion
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=18293057334"
              className={buttonStyles.button}
            >
              <WhatsAppIcon style={{ marginRight: 7 }} /> WhatsApp
              1-829-305-7334
            </a>

            <a
              href="https://forms.gle/8pfcA4dgqDtkomQQA"
              className={buttonStyles.button}
            >
              Registro de nuevos clientes
            </a>

            <a
              href="https://forms.gle/K59iqaBoRqP3ijA66"
              className={buttonStyles.button}
            >
              Reservas de hotel
            </a>

            <a
              href="https://forms.gle/tJTKJ6YDeFZNAj9Z6"
              className={buttonStyles.button}
            >
              Reservas de play day
            </a>

            <a
              href="https://forms.gle/XiD93JvoSrSrKvQa6"
              className={buttonStyles.button}
            >
              Reservas de peluquería
            </a>
          </div>

          <p className={styles.description}>
            Calle Angel Severo Cabral No. 63, Urb. Fernández,
            <br />
            Santo Domingo, República Dominicana
          </p>
        </main>
      </div>

      <section id="hotel" className={styles.hotel}>
        <div className={styles.hotelImageContainer}>
          <Image
            src="/play-area.jpg"
            alt="área de juegos del hotel"
            loading="lazy"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <h2 className="text-center">Hotel</h2>

        <div className={styles.hotelTextContainer}>
          <div className={styles.hotelTextFirst}>
            <div>
              <p>
                <strong>Recepción y entrega</strong>
              </p>
              <ul>
                <li>
                  Lunes a Viernes{' '}
                  <strong className="font-bold">8:00 A.M. a 6:00 P.M.</strong>
                </li>
                <li>
                  Sábados{' '}
                  <strong className="font-bold">9:00 A.M. a 4:00 P.M.</strong>
                </li>
                <li>
                  <strong className="font-bold">
                    Domingos no hay recepción ni entrega. Sólo trabajamos de
                    manera interna.
                  </strong>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.divider}>
            <div> </div>
          </div>

          <div className={styles.hotlTextSecond}>
            <div>
              <p className="font-bold text-center">
                En nuestro hotel, tu perro recibirá un trato familiar,
                personalizado y libre de jaulas, procurándole ejercicios, juegos
                y cariño diario con supervisión constante.
              </p>

              <div className="text-center font-bold">
                Perros hasta 20 libras
              </div>
              <div className={styles.price}>
                <span className={styles.currency}>RD$</span>
                <span className={styles.priceBase}>600</span>
                <span className={styles.priceDecimals}>.00</span> por noche
              </div>

              <p className="text-uppercase">
                <strong>Incluye</strong>
              </p>
              <p className="text-center font-bold">
                Hospedaje 100% libre de jaulas con supervisión constante,
                juegos, cariño, fotos, trato personalizado y mucho más.
              </p>

              <p className="text-uppercase">
                <strong>Requisitos</strong>
              </p>
              <ul className={styles.requirementsList}>
                <li>
                  Hacer reserva con un mínimo de 24 horas de antelación via{' '}
                  <WhatsAppIcon height={16} /> WhatsApp al{' '}
                  <a
                    href="https://api.whatsapp.com/send?phone=18293057334"
                    className="font-bold"
                  >
                    1-829-305-7334
                  </a>
                </li>
                <li>
                  Record de vacunas al día (quintuple, rabia y bordetella)
                </li>
                <li>Vermífugo al día</li>
                <li>No aceptamos hembras en celo</li>
                <li>Nexgard para evitar pulgas y garrapatas</li>
                <li>Traer comida</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="playday" className={styles.playday}>
        <div className={styles.playdayPicture}>
          <Image
            src="/playday.jpg"
            alt="joven jugando con perros"
            loading="lazy"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={styles.playdayInfo}>
          <div className={styles.playdayInfoInner}>
            <h2>Play Day</h2>

            <p>
              El PLAY DAY es un pasa día de juegos, socialización y diversión
              para perros medianos y pequeños.
            </p>

            <p>
              Es ideal para esos peludos juguetones que necesitan mucha
              actividad y ejercicio. Aquí pueden hacer uso de toda esa energía,
              y también para esos tímidos y temerosos pues las actividades de
              juego y socialización que realizamos los ayudan muchísimo a
              mejorar su comportamiento.
            </p>

            <p>
              <strong className="font-bold text-uppercase">Incluye</strong>
            </p>

            <ul>
              <li>Agua potable y fresca siempre.</li>
              <li>
                Área de juego asegurada con altas paredes y divisiones internas
                para la seguridad de su mascota.
              </li>
              <li>Techo con protección UV.</li>
              <li>Abanicos industriales para la ventilación.</li>
              <li>
                Trabajo de integración y socialización con la manada y juegos de
                estimulación mental.
              </li>
              <li>Supervisión constante.</li>
              <li>
                Accesorios para la utilización durante su estadía (platos,
                camas, meriendas, entre otros).
              </li>
              <li>Y sobre todo mucho cariño y atención.</li>
            </ul>

            <p>
              <strong className="font-bold text-uppercase">Requisitos</strong>
            </p>

            <ul>
              <li>Sólo para perros menores a 20 libras</li>
              <li>Preventivo para pulgas y garrapatas</li>
            </ul>

            <p className={`${styles.playdayPrice} text-center`}>
              <strong className="font-bold">RD$300.00</strong>
            </p>

            <div className="text-center">
              <p>
                <span className="color-text-brand-orange font-bold">
                  Martes y Jueves
                </span>
                <br />
                <strong className="font-bold">8:00 A.M. a 6:00 P.M.</strong>
              </p>

              <p>
                <span className="color-text-brand-orange font-bold">
                  Miércoles
                </span>
                <br />
                <strong className="font-bold">8:00 A.M. a 6:00 P.M.</strong>
                <br />
                Sólo para cachorros
              </p>

              <p>
                <span className="color-text-brand-orange font-bold">
                  Sábados
                </span>
                <br />
                <strong className="font-bold">9:00 A.M. a 4:00 P.M.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="grooming" className={styles.grooming}>
        <div className={styles.groomingHeader}>
          <div className={styles.groomingTitleContainer}>
            <h2>Baños y peluquería</h2>
          </div>
        </div>

        <div className={styles.groomingInfo}>
          <div className={styles.dogPaw}>
            <PawIcon />
          </div>

          <div className={styles.groomingTiers}>
            <div>
              <h3>Baño Regular</h3>

              <ul>
                <li>
                  1-10 libras <strong className="font-bold">RD$350</strong>
                </li>
                <li>
                  11-20 libras <strong className="font-bold">RD$450</strong>
                </li>
              </ul>

              <p>Baño, secado y colonia.</p>
            </div>

            <div>
              <h3>Baño Deluxe</h3>

              <ul>
                <li>
                  1-20 libras <strong className="font-bold">RD$600</strong>
                </li>
              </ul>

              <p>
                Baño, secado, acondicionador, leave-in, corte de uñas, limpieza
                de oído, cepillado dental, vaciado perianal y colonia.
              </p>
            </div>

            <div>
              <h3>Baño Premium</h3>

              <ul>
                <li>
                  1-20 libras <strong className="font-bold">RD$850</strong>
                </li>
              </ul>

              <p>
                Baño, secado, acondicionador, leave-in, corte de uñas, limpieza
                de oído, cepillado dental, vaciado perianal, recorte de patas,
                carita, área de bikini, colonia y bufanda.
              </p>
            </div>
          </div>

          <div className={styles.groomingAdditionals}>
            <div>
              <h3>Adicionales</h3>

              <ul>
                <li>
                  Baño con línea <strong className="font-bold">+RD$150</strong>
                  <ul>
                    <li>Anti-caida de pelo con línea Shed-X</li>
                    <li>Shampoo de avena con línea Walsh</li>
                  </ul>
                </li>

                <li>
                  Baño Medicado <strong className="font-bold">+RD$150</strong>
                  <br />
                  Shampoo de clorexidina o con azufre.
                </li>

                <li>
                  Bufanda de muecas{' '}
                  <strong className="font-bold">+RD$350</strong>
                </li>
                <li>
                  Solo corte de uñas{' '}
                  <strong className="font-bold">+RD$150</strong>
                </li>
                <li>
                  Corte bajo <strong className="font-bold">+RD$400</strong>
                </li>
                <li>
                  Corte especializado{' '}
                  <strong className="font-bold">+RD$500</strong>
                </li>
                <li>
                  Deslanado <strong className="font-bold">+RD$500</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className={`${styles.groomingHours} text-center`}>
            <p>
              <span className="color-text-brand-orange font-bold">
                Lunes a Viernes
              </span>
              <br />
              <strong className="font-bold">9:00 A.M. a 6:00 P.M.</strong>
              <br />
              Recibimos hasta las 4:00 P.M.
            </p>

            <p>
              <span className="color-text-brand-orange font-bold">Sábados</span>
              <br />
              <strong className="font-bold">9:00 A.M. a 4:00 P.M.</strong>
              <br />
              Recibimos hasta las 3:00 P.M.
            </p>
          </div>
        </div>
      </section>

      <Map />
    </div>
  )
}
