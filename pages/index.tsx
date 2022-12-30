import React from 'react'
import Image from 'next/image'

import { Blurhash } from 'react-blurhash'

import { Map } from '../components/Map'
import { PawIcon } from '../components/PawIcon'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import { InstagramIcon } from '../components/InstagramIcon'

import styles from '../styles/Home.module.css'
import buttonStyles from '../styles/Button.module.css'

// TODO optimize fonts
// TODO position svg paws absoolutely

const rvspHereLink = 'https://forms.gle/Hjpnr5Z1ngdY5rRv8'

export default function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.container}>
        <main className={styles.main}>
          <link itemProp="url" href="https://petmansion.com.do/" />
          <Image
            priority
            src="/branding/logo-petmansion-2.png"
            alt="logo"
            loading="eager"
            width={367}
            height={407}
            itemProp="logo"
          />

          <p className={styles.description} itemProp="description">
            Hotel y peluquería para perros en Santo Domingo, República
            Dominicana (R.D.)
          </p>

          <div className={styles.links}>
            <a
              href="https://api.whatsapp.com/send?phone=18293057334"
              className={buttonStyles.button}
            >
              <WhatsAppIcon style={{ marginRight: 7 }} /> WhatsApp
            </a>

            <a href="https://wa.link/6i8srm" className={buttonStyles.button}>
              Pide la comida de tu mascota AQUI
            </a>

            <a href={rvspHereLink} className={buttonStyles.button}>
              Reserva aquí
            </a>

            <a
              href="https://instagram.com/petmansion"
              className={buttonStyles.button}
            >
              <InstagramIcon style={{ marginRight: 7 }} /> @petmansion
            </a>

            <a
              href={
                'https://docs.google.com/forms/d/1MDzfAJOb6QJTwFSjfJe1q58W8kG3SfZvRWUUfSnJgSY/edit'
              }
              className={buttonStyles.button}
            >
              Solicitud de Adopciones
            </a>
          </div>

          <address className={styles.description} itemProp="address">
            <span itemProp="streetAddress">
              Calle Angel Severo Cabral No. 63, Urb. Fernández,
            </span>
            <br />
            <span itemProp="addressLocality">
              Santo Domingo, República Dominicana
            </span>
          </address>
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
          <link itemProp="image" href="/play-area.jpg"></link>
        </div>

        <h2 className="text-center">Hotel</h2>

        <div className={styles.hotelTextContainer}>
          <div className={styles.hotelTextFirst}>
            <div className="text-center">
              <p>
                <strong className="font-bold">
                  Horario de recepción y entrega
                </strong>
              </p>

              <div className="text-center">
                <p>
                  <span className="color-brand-green-bright  font-bold">
                    Lunes a Jueves
                  </span>
                  <br />
                  <strong className="font-bold">8:00 A.M. a 6:00 P.M.</strong>
                  <br />
                  Recibimos hasta las 4:00 P.M.
                </p>

                <p>
                  <span className="color-brand-green-bright  font-bold">
                    Viernes
                  </span>
                  <br />
                  <strong className="font-bold">8:00 A.M. a 5:00 P.M.</strong>
                  <br />
                  Recibimos hasta las 2:00 P.M.
                </p>

                <p>
                  <span className="color-brand-green-bright font-bold">
                    Sábados
                  </span>
                  <br />
                  <strong className="font-bold">9:00 A.M. a 4:00 P.M.</strong>
                  <br />
                  Recibimos hasta las 2:00 P.M.
                </p>

                <p>
                  <span className="color-brand-green-bright  font-bold">
                    Domingos
                  </span>
                  <br />
                  <strong className="font-bold">Cerrados.</strong>
                  <br />
                  No hay recepción ni entrega, solo trabajamos de manera
                  interna.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.divider}>
            <div> </div>
          </div>

          <div className={styles.hotlTextSecond}>
            <div>
              <p className="font-bold text-center">
                En nuestro hotel tu perro recibirá un trato familiar y
                personalizado, procurándole ejercicios, juegos y cariño diario
                con supervisión constante.
              </p>

              <p className="text-uppercase">
                <strong>Hospedaje Incluye</strong>
              </p>

              <ul>
                <li>Hospedaje</li>
                <li>Agua potable y fresca permanente.</li>
                <li>
                  Derecho al área de juego con aproximadamente 120 m<sup>2</sup>{' '}
                  asegurado con altas paredes y divisiones internas para la
                  seguridad de su mascota, casitas de descanso y áreas
                  naturales.
                </li>
                <li>
                  Techo con protección UV para proteger de la lluvia y exceso de
                  sol.
                </li>
                <li>
                  Abanicos Industriales para mantener fresca y ventilada en el
                  área de juegos.
                </li>
                <li>Trabajo de integración y sociabilización con la manada.</li>
                <li>Supervisión constante.</li>
                <li>Derecho al uso de piscina (cuando aplique).</li>
                <li>
                  Derecho a la utilización de todos los juegos para diversión y
                  estimulación mental.
                </li>
                <li>
                  Accesorios para la utilización durante su estadía (platos,
                  camas, meriendas, entre otros).
                </li>
                <li>
                  Medicamentos de primeros auxilios en caso de ser necesario.
                </li>
                <li>Y sobre todo mucho cariño y atención.</li>
              </ul>

              <p className="text-center font-bold">Perros hasta 20 libras</p>
              <div className={styles.price}>
                <span className={styles.currency}>RD$</span>
                <span className={styles.priceBase}>775</span> por noche
              </div>

              <p>
                <a
                  href={rvspHereLink}
                  className={`${buttonStyles.button} center-x`}
                >
                  Reserva aquí
                </a>
              </p>

              <p className="text-uppercase">
                <strong>Requisitos</strong>
              </p>
              <ul>
                <li>
                  Solo perritos pequeños y medianos de hasta 20 libras
                  aproximadamente.
                </li>
                <li>
                  Record de vacunas al día (quíntuple, rabia y bordetella)
                </li>
                <li>Vermífugo al día</li>
                <li>No aceptamos hembras en celo</li>
                <li>Preventivo para pulgas y garrapatas</li>
                <li>Traer su comida</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="playday" className={styles.playday}>
        <div className={styles.playdayPicture}>
          <Blurhash
            hash={'LSG,I44Xxb%g.iMjR7S0Xfi{n7NF'}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
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
              <strong className="font-bold text-uppercase">Requisitos</strong>
            </p>

            <ul>
              <li>Sólo para perros menores a 20 libras</li>
              <li>No aceptamos hembras en celo</li>
              <li>Record de vacunas al día (quíntuple, rabia y bordetella)</li>
            </ul>

            <div itemScope itemType="http://schema.org/Offer" itemProp="offers">
              <meta itemProp="priceCurrency" content="DOP" />
              <p className={`${styles.playdayPrice} text-center`}>
                <strong className="font-bold">
                  <span>RD$</span>
                  <span itemProp="price">450</span> por dia
                </strong>
              </p>
            </div>

            <ul>
              <li>
                Paquete de 4 visitas <strong>RD$1,500</strong>
              </li>
              <li>
                Paquete de 8 visitas <strong>RD$2,800</strong>
              </li>
            </ul>

            <p>
              <a
                href={rvspHereLink}
                className={`${buttonStyles.button} center-x`}
              >
                Reserva aquí
              </a>
            </p>

            <div className="text-center">
              <p className="font-bold">
                <span className="color-text-brand-orange">
                  Martes, Miércoles y Jueves
                </span>
                <br />
                Recibimos a partir de las 8:00 A.M. hasta las 11:00 A.M.
                <br />
                Entregamos hasta las 6:00 PM.
              </p>

              <p className="font-bold">
                <span className="color-text-brand-orange">Sábados</span>
                <br />
                Recibimos a partir de las 9:00 A.M. hasta las 11:00 A.M.
                <br />
                Entregamos hasta las 4:00 PM.
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
            <h3>Baños</h3>

            <ul>
              <li>
                Baño Regular <strong>RD$490</strong>
                <br />
                Baño, secado, colonia y adorno.
              </li>

              <li>
                Baño Deluxe <strong>RD$690</strong>
                <br />
                Baño, secado, corte de uñas, limpieza de oído, cepillado dental,
                vaciado perianal, colonia, adorno.
              </li>
            </ul>

            <h3>Peluquería</h3>

            <ul>
              <li>
                Peluquería Premium <strong> RD$990</strong>
                <br />
                Incluye: Baño Deluxe + recorte Área del Bikini + Carita +
                Patitas
              </li>

              <li>
                Peluquería Premium Especial
                <strong> RD$1,150</strong>
                <br />
                Incluye: Baño Deluxe + Corte especializado de raza y/o corte
                bajo
              </li>
            </ul>

            <h3>Deslanado</h3>

            <ul>
              <li>
                Baño de su eleccón + <strong>RD$500</strong>
              </li>
            </ul>
          </div>

          <div className={styles.groomingAdditionals}>
            <div>
              <h3>Adicionales</h3>

              <ul>
                <li>
                  Baño con línea <strong className="font-bold">+ RD$175</strong>
                  <ul>
                    <li>Anti-caida de pelo con línea Shed-X</li>
                    <li>Shampoo hidratante con línea Walsh</li>
                  </ul>
                </li>

                <li>
                  Baño Medicado <strong className="font-bold">+ RD$175</strong>
                  <br />
                  Shampoo de clorexidina o con azufre.
                </li>

                <li>
                  Corte de uñas <strong className="font-bold">+ RD$175</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className={`${styles.groomingHours} text-center`}>
            <p>
              <span className="color-text-brand-orange font-bold">
                Lunes a Jueves
              </span>
              <br />
              <strong className="font-bold">8:00 A.M. a 6:00 P.M.</strong>
              <br />
              Recibimos hasta las 4:00 P.M.
            </p>

            <p>
              <span className="color-text-brand-orange font-bold">Viernes</span>
              <br />
              <strong className="font-bold">8:00 A.M. a 5:00 P.M.</strong>
              <br />
              Recibimos hasta las 2:00 P.M.
            </p>

            <p>
              <span className="color-text-brand-orange font-bold">Sábados</span>
              <br />
              <strong className="font-bold">9:00 A.M. a 4:00 P.M.</strong>
              <br />
              Recibimos hasta las 2:00 P.M.
            </p>

            <p>
              <span className="color-text-brand-orange font-bold">
                Domingos y feriados
              </span>
              <br />
              <strong className="font-bold">Cerrados.</strong>
              <br />
              No recepción ni entrega.
              <br />
              Sólo trabajabmos de manera interna.
            </p>

            <div>
              <p>Para hacer tu cita de baño o peluquería, click aquí:</p>

              <a
                href={rvspHereLink}
                className={`${buttonStyles.button} center-x`}
              >
                Reservas de peluquería
              </a>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://instagram.com/petmansion"
        className={buttonStyles.button}
        style={{
          margin: '40px auto',
        }}
      >
        <InstagramIcon style={{ marginRight: 7 }} /> @petmansion
      </a>

      <Map />
    </div>
  )
}
