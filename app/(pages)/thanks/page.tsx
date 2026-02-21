import PageWrapper from '@/components/PageWrapper'
import CircleMouse from '@/components/CircleMouse'
import Button from '@/components/Button'
import { ROUTES } from '@/routes/routes'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${ROUTES.THANKS.title}`,
  description: ROUTES.THANKS.description,
  openGraph: {
    title: `${ROUTES.THANKS.title} | ${ROUTES.HOME.title}`,
    description: ROUTES.THANKS.description,
    images: [
      {
        url: ROUTES.THANKS.image,
        width: 1200,
        height: 630,
      },
    ],
    url: 'https://lucasm.dev/thanks',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${ROUTES.THANKS.title} | ${ROUTES.HOME.title}`,
    description: ROUTES.THANKS.description,
    images: [ROUTES.THANKS.image],
  },
}

export default function PageThanks() {
  return (
    <PageWrapper>
      <CircleMouse />
      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container">
            <h1>{ROUTES.THANKS.title}! ✌🏻</h1>

            <p className="description">
              "What we truly are is what the impossible creates in us." —
              Clarice Lispector
            </p>

            <Button url="/">Back to homepage</Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
