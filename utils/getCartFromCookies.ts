import { GetServerSidePropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { contentfulClient } from '../services/contentfulClient'
import { Cart, Product } from '../types'
import { tryParse } from './tryParse'
import { CART_KEY } from './writeToCart'

export async function getCartFromCookies(
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
) {
  const cartCookieValue: undefined | string = context.req.cookies[CART_KEY]
  const cart: Cart = cartCookieValue ? tryParse(cartCookieValue) : []

  const entries = await contentfulClient.getEntries<Product>({
    'content_type': 'product',
    'sys.id[in]': cart.map(([id]) => id).join(),
  })

  const quantities = Object.fromEntries(cart)

  return { entries, quantities }
}
