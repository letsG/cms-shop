import { absoluteUrl } from '@/lib/utils'
import { Metadata } from 'next'
import '../styles/index.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://flex-shop.com'),
  title: {
    default: 'Flex-Shop',
    template: '%s | FlexShop.Top'
  },
  description: 'Flexible e-shop for any goods',
  openGraph: {
    title: 'Flex-Shop - A Static Site e-shop for Next.js',
    description: 'A e-shop for any goods built with Outstatic.',
    url: absoluteUrl('/'),
    siteName: 'Flex-Shop.Top',
    images: [
      {
        url: absoluteUrl(`/images/og-image.png?cache=${Date.now()}`),
        width: 512,
        height: 512
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
