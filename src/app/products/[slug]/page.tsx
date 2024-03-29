import { getDocumentSlugs, load } from 'outstatic/server'
import ProductEmbed from '@/components/ProductEmbed'
import { OstDocument } from 'outstatic'
import { Metadata } from 'next'
import { absoluteUrl } from '@/lib/utils'
import { notFound } from 'next/navigation'

type Product = {
  productId: string
  id: string
} & OstDocument

interface Params {
  params: {
    slug: string
  }
}
export async function generateMetadata(params: Params): Promise<Metadata> {
  const { product } = await getData(params)

  if (!product) {
    return {}
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      type: 'article',
      url: absoluteUrl(`/products/${product.slug}`),
      images: [
        {
          url: absoluteUrl(product?.coverImage || '/images/og-image.png?cache=0'),
          width: 1200,
          height: 630,
          alt: product.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: product.description,
      images: absoluteUrl(product?.coverImage || '/images/og-image.png?cache=0')
    }
  }
}

export default async function Product(params: Params) {
  const { product } = await getData(params)

  return <ProductEmbed product={product}/>
}

async function getData({ params }: Params) {
  const db = await load()
  const product = await db
    .find<Product>({ collection: 'products', slug: params.slug }, [
      'title',
      'publishedAt',
      'description',
      'slug',
      'author',
      'content',
      'coverImage',
      'productId',
      'id'
    ])
    .first()

  if (!product) {
    notFound()
  }

  return {
    product,
  }
}

export async function generateStaticParams() {
  const products = getDocumentSlugs('products')
  return products.map((slug) => ({ slug }))
}
