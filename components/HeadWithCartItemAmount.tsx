import useLocalStorage from '@rehooks/local-storage'
import Head from 'next/head'
import { CART_KEY } from '../utils/writeToCart'

export default function HeadWithCartItemAmount({ title }: { title: string }) {
  const [cart] = useLocalStorage<string[] | null>(CART_KEY)

  return (
    <Head>
      <title>
        Pet Mansion - {title} {cart?.length ? `(${cart.length})` : ''}
      </title>
    </Head>
  )
}
