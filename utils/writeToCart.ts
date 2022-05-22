import { writeStorage } from '@rehooks/local-storage'
import { Cart } from '../types'

export const CART_KEY = 'cart_v1'

export function writeToCart(cart: Cart) {
  writeStorage(CART_KEY, cart)
  const serialized = JSON.stringify(cart)
  document.cookie = `${CART_KEY}=${serialized};path=/`
}
