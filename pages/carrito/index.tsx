import { GetServerSideProps, NextPage } from 'next'
import HeadWithCartItemAmount from '../../components/HeadWithCartItemAmount'
import { contentfulClient } from '../../services/contentfulClient'
import { Product } from '../../types'
import * as contentful from 'contentful'
import Link from 'next/link'
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

const Carrito: NextPage<Props> = ({ entries, quantities }) => {
  return (
    <>
      <HeadWithCartItemAmount title="Carrito" />

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {entries.items.map((product) => {
            const quantity = quantities[product.sys.id]
            return (
              <tr key={product.sys.id}>
                <td>{product.fields.name}</td>
                <td>{quantity}</td>
                <td>{formatPrice(product.fields.price)}</td>
                <td>{formatPrice(product.fields.price * quantity)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <Link href="/checkout">
        <a>Proceder con la compra</a>
      </Link>
    </>
  )
}

export default Carrito
