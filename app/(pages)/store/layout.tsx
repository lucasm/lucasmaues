import { ROUTES } from '@/routes/routes'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${ROUTES.STORE.title}`,
  description: ROUTES.STORE.description,
  openGraph: {
    title: `${ROUTES.STORE.title} | ${ROUTES.HOME.title}`,
    description: ROUTES.STORE.description,
    images: [
      {
        url: ROUTES.STORE.image,
        width: 1200,
        height: 630,
      },
    ],
    url: 'https://lucasm.dev/store',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${ROUTES.STORE.title} | ${ROUTES.HOME.title}`,
    description: ROUTES.STORE.description,
    images: [ROUTES.STORE.image],
  },
}

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
