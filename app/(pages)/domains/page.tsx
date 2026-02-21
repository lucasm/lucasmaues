import PageWrapper from '@/components/PageWrapper'
import CircleMouse from '@/components/CircleMouse'
import Button from '@/components/Button'
import { IconEmail } from '@/components/Svgs'
import { ROUTES } from '@/routes/routes'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${ROUTES.DOMAINS.title}`,
  description: ROUTES.DOMAINS.description,
  openGraph: {
    title: `${ROUTES.DOMAINS.title}`,
    description: ROUTES.DOMAINS.description,
    images: [
      {
        url: ROUTES.DOMAINS.image,
        width: 1200,
        height: 630,
      },
    ],
    url: 'https://lucasm.dev/domains',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${ROUTES.DOMAINS.title} | ${ROUTES.HOME.title}`,
    description: ROUTES.DOMAINS.description,
    images: [ROUTES.DOMAINS.image],
  },
}

export default function PageDomains() {
  return (
    <PageWrapper>
      <CircleMouse />

      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container">
            <h1>{ROUTES.DOMAINS.title} 🤝🏻</h1>

            <p className="description">
              If you is interested in buying the domain thats redirected you to
              this page, please contact me by email:
            </p>

            <Button url="mailto:domains@lucasm.dev">
              <>
                <IconEmail />
                domains@lucasm.dev
              </>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
