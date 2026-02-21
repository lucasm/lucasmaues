import PageWrapper from '@/components/PageWrapper'
import Button from '@/components/Button'
import CardsWork from '@/components/CardsWork'
import { IconEmail, IconWhatsapp } from '@/components/Svgs'
import { ROUTES } from '@/routes/routes'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${ROUTES.WORK.title}`,
  description: ROUTES.WORK.description,
  openGraph: {
    title: `${ROUTES.WORK.title} | ${ROUTES.HOME.title}`,
    description: ROUTES.WORK.description,
    images: [
      {
        url: ROUTES.WORK.image,
        width: 1200,
        height: 630,
      },
    ],
    url: 'https://lucasm.dev/work',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${ROUTES.WORK.title} | ${ROUTES.HOME.title}`,
    description: ROUTES.WORK.description,
    images: [ROUTES.WORK.image],
  },
}

export default function PageWork() {
  return (
    <PageWrapper>
      <section>
        <div className="page">
          <div className="container miniContainer">
            <h1>{ROUTES.WORK.title}</h1>

            <p className="description">{ROUTES.WORK.description}</p>
          </div>
        </div>
      </section>

      <section className="background-y">
        <div>
          <CardsWork />
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="subtitle">Contact</h2>

          <div className="aboutContainer">
            <div>
              <h3>Let's talk about your project</h3>
            </div>

            <div>
              <Button url="mailto:hello@lucasm.dev">
                <>
                  <IconEmail />
                  hello@lucasm.dev
                </>
              </Button>

              <div style={{ marginTop: '1rem' }} translate="no">
                <Button url="https://wa.me/5531997038007" isExternal>
                  <>
                    <IconWhatsapp />
                    WhatsApp
                  </>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
