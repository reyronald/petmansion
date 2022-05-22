import { GetServerSideProps, NextPage } from 'next'
import HeadWithCartItemAmount from '../../components/HeadWithCartItemAmount'
import { contentfulClient } from '../../services/contentfulClient'
import { Cart, Product } from '../../types'
import * as contentful from 'contentful'
import { CART_KEY } from '../../utils/writeToCart'

type Props = {
  entries: contentful.EntryCollection<Product>
  quantities: Record<string, number>
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const cartCookieValue: undefined | string = context.req.cookies[CART_KEY]
  // TODO do a safe json parse here
  const cart: Cart = cartCookieValue ? JSON.parse(cartCookieValue) : []

  const entries = await contentfulClient.getEntries<Product>({
    'content_type': 'product',
    'sys.id[in]': cart.map(([id]) => id).join(),
  })

  const quantities = Object.fromEntries(cart)

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
                <td>{product.fields.price}</td>
                <td>{product.fields.price * quantity}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Carrito
