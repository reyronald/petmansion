import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { contentfulClient } from '../../services/contentfulClient'
import { Cart, isContentfulError, Product } from '../../types'
import * as contentful from 'contentful'
import Image from 'next/image'
import useLocalStorage from '@rehooks/local-storage'
import { useHasMounted } from '../../hooks/useHasMounted'
import Link from 'next/link'
import HeadWithCartItemAmount from '../../components/HeadWithCartItemAmount'
import { CART_KEY, writeToCart } from '../../utils/writeToCart'
import { formatPrice } from '../../utils/formatPrice'

type Props = {
  entry: contentful.Entry<Product>
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const id = context.params?.id

  if (typeof id === 'string') {
    try {
      const entry = await contentfulClient.getEntry<Product>(id)
      return { props: { entry } }
    } catch (error: unknown) {
      if (isContentfulError(error) && error.sys.id === 'NotFound') {
        throw error
      }
      throw error
    }
  }

  throw new Error(`Invalid id: ${id?.toString()}`)
}

const Producto: NextPage<Props> = ({ entry }) => {
  const productId = entry.sys.id

  const hasMounted = useHasMounted()

  const [cart] = useLocalStorage<Cart | null>(CART_KEY)
  const cartMap = cart ? Object.fromEntries(cart) : {}
  const defaultQuantity = cartMap[productId]
  const isInCart = productId in cartMap

  function addOrRemoveFromCart(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    const quantitySelect = e.currentTarget?.form?.elements.namedItem(
      'quantity',
    ) as HTMLSelectElement
    const quantity = Number.parseInt(quantitySelect.value, 10)

    let nextCart: Cart
    if (isInCart) {
      nextCart = (cart || []).filter(([currentId]) => currentId !== productId)
    } else {
      nextCart = cart ? [...cart] : []
      nextCart.push([productId, quantity])
    }

    writeToCart(nextCart)
  }

  return (
    <>
      <HeadWithCartItemAmount title="Tienda" />

      <h1>
        <Link href="/tienda">
          <a>Pet Mansion Tienda</a>
        </Link>
      </h1>

      <h2>{entry.fields.name}</h2>

      <p>{entry.fields.description}</p>

      <p>{formatPrice(entry.fields.price)}</p>

      <Image
        alt={entry.fields.img.fields.title}
        src={`https:${entry.fields.img.fields.file.url}`}
        width={entry.fields.img.fields.file.details.image?.width ?? 0}
        height={entry.fields.img.fields.file.details.image?.height ?? 0}
      />

      <form>
        <p>
          {!hasMounted ? (
            <button disabled>⌛🛒 Explorando carrito</button>
          ) : (
            <>
              <label>
                Cantidad
                <select
                  name="quantity"
                  id="quantity"
                  disabled={isInCart}
                  defaultValue={defaultQuantity}
                >
                  {Array.from(Array(30)).map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </label>

              {isInCart ? (
                <button onClick={addOrRemoveFromCart} type="button">
                  ➖🛒 Remover del carrito ({cart?.length ?? 0})
                </button>
              ) : (
                <button onClick={addOrRemoveFromCart} type="button">
                  ➕🛒 Agregar al carrito ({cart?.length ?? 0})
                </button>
              )}
            </>
          )}
        </p>
      </form>

      <p>
        <Link href="/carrito">
          <a>Ir al carrito</a>
        </Link>
      </p>
    </>
  )
}

export default Producto
