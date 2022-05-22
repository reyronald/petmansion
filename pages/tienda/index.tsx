import Link from 'next/link'

import styles from './tienda.module.css'
import Image from 'next/image'

import * as contentful from 'contentful'
import { GetServerSideProps, NextPage } from 'next'
import { contentfulClient } from '../../services/contentfulClient'
import { Product } from '../../types'
import HeadWithCartItemAmount from '../../components/HeadWithCartItemAmount'

type Props = { entries: contentful.EntryCollection<Product> }

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const entries = await contentfulClient.getEntries<Product>({
    content_type: 'product',
  })

  return { props: { entries } }
}

const Tienda: NextPage<Props> = ({ entries }) => {
  return (
    <>
      <HeadWithCartItemAmount title="Tienda" />

      <h1>Pet Mansion Tienda</h1>

      {entries.items.map((product) => {
        return (
          <div key={product.sys.id} className={styles.product}>
            <div>
              <Image
                alt={product.fields.img.fields.title}
                src={`https:${product.fields.img.fields.file.url}`}
                width={product.fields.img.fields.file.details.image?.width ?? 0}
                height={
                  product.fields.img.fields.file.details.image?.height ?? 0
                }
              />
            </div>

            <h2>
              <Link href={`/tienda/${product.sys.id}`}>
                <a>{product.fields.name}</a>
              </Link>
            </h2>
          </div>
        )
      })}
    </>
  )
}

export default Tienda
