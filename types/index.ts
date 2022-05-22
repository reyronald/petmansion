import * as contentful from 'contentful'

export type Product = {
  name: string
  description: string
  price: number
  img: contentful.Asset
}

export type Cart = [string, number][]

export interface ContentfulError extends Error {
  sys: {
    type: 'Error'
    id: 'NotFound' | string
  }

  details: { type: 'Entry'; id: '1'; environment: 'master'; space: undefined }
}

export function isContentfulError(error: unknown): error is ContentfulError {
  const isIt =
    error != null &&
    typeof error === 'object' &&
    'sys' in error &&
    'type' in error.sys
  return isIt
}
