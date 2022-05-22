import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useRef, useState } from 'react'
import HeadWithCartItemAmount from '../../components/HeadWithCartItemAmount'
import * as contentful from 'contentful'
import { Product } from '../../types'
import { getCartFromCookies } from '../../utils/getCartFromCookies'
import { formatPrice } from '../../utils/formatPrice'

type Props = {
  entries: contentful.EntryCollection<Product>
  quantities: Record<string, number>
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const { entries, quantities } = await getCartFromCookies(context)
  return { props: { entries, quantities } }
}

const Checkout: NextPage<Props> = ({ entries, quantities }) => {
  const formRef = useRef<HTMLFormElement>(null)

  const [values, setValues] = useState<Record<string, FormDataEntryValue>>({})

  const text = getText({ values, entries, quantities })

  return (
    <>
      <HeadWithCartItemAmount title="Checkout" />

      <h1>
        <Link href="/tienda">
          <a>Pet Mansion Tienda</a>
        </Link>
      </h1>

      <form
        ref={formRef}
        onChange={(e) => {
          const form = e.currentTarget
          const formData = new FormData(form)
          const valuesTupples = Array.from(formData)
          const nextValues = Object.fromEntries(valuesTupples)
          setValues(nextValues)
        }}
      >
        <div>
          <label>
            Nombre y apellido *
            <input type="text" id="fullName" name="fullName" required />
          </label>
        </div>

        <div>
          <label>
            Correo electrónico (Email) *
            <input type="email" id="email" name="email" required />
          </label>
        </div>

        <div>
          <label>
            Teléfono *
            <input type="tel" id="phone" name="phone" required />
          </label>
        </div>

        <a
          href={`https://wa.me/18293057334?text=${window.encodeURI(text)}`}
          target="_blank"
          rel="noreferrer noopener"
          onClick={(e) => {
            const form = formRef.current
            if (form) {
              const validity = form.checkValidity()
              if (!validity) {
                form.reportValidity()
                e.preventDefault()
              }
            }
          }}
        >
          Someter orden
        </a>
      </form>
    </>
  )
}

export default Checkout

function getText(args: {
  values: Record<string, FormDataEntryValue>
  entries: contentful.EntryCollection<Product>
  quantities: Record<string, number>
}) {
  const { values, entries, quantities } = args

  const itemTotals = entries.items.map(({ fields: { price }, sys: { id } }) => {
    const quantity = quantities[id]
    const itemTotal = price * quantity
    return itemTotal
  })
  const total = itemTotals.reduce((prev, current) => prev + current)

  const text = `
** Pet Mansion - Tienda | Orden de Compra **

${values.fullName}
${values.email}
${values.phone}

${entries.items
  .map(
    ({ fields: { name, price }, sys: { id } }) =>
      `${name} x${quantities[id]} (${formatPrice(price)} c/u) => ${formatPrice(
        price * quantities[id],
      )}`,
  )
  .join('\r\n')}

TOTAL: ${formatPrice(total)}
    `.trim()

  return text
}
