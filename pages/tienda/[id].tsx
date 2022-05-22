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
  const isInCart = cart?.some(([id]) => id === productId)

  function addOrRemoveFromCart() {
    let nextCart: Cart
    if (isInCart) {
      nextCart = (cart || []).filter(([currentId]) => currentId !== productId)
    } else {
      nextCart = cart ? [...cart] : []
      nextCart.push([productId, 1])
    }

    writeToCart(nextCart)
  }

  return (
    <>
      <HeadWithCartItemAmount title="Tienda" />

      <h1>Pet Mansion Tienda</h1>

      <h2>{entry.fields.name}</h2>

      <p>{entry.fields.description}</p>

      <p>${entry.fields.price}</p>

      <Image
        alt={entry.fields.img.fields.title}
        src={`https:${entry.fields.img.fields.file.url}`}
        layout="fill"
        objectFit="contain"
      />

      <p>
        {!hasMounted ? (
          <button disabled>⌛🛒 Explorando carrito</button>
        ) : isInCart ? (
          <button onClick={addOrRemoveFromCart}>
            ➖🛒 Remover del carrito ({cart?.length ?? 0})
          </button>
        ) : (
          <button onClick={addOrRemoveFromCart}>
            ➕🛒 Agregar al carrito ({cart?.length ?? 0})
          </button>
        )}
      </p>

      <p>
        <Link href="/carrito">
          <a>Ir al carrito</a>
        </Link>
      </p>
    </>
  )
}

export default Producto
