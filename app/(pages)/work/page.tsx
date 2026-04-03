import PageWrapper from '@/components/PageWrapper'
import Button from '@/components/Button'
import CardsWork from '@/components/CardsWork'
import { IconEmail, IconWhatsapp } from '@/components/Svgs'
import { ROUTES } from '@/routes/routes'
import { getPageMetadata } from '@/utils/metadata'

export const metadata = getPageMetadata('WORK')

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
              <Button url="mailto:hello@lucasmaues.com">
                <>
                  <IconEmail />
                  Email
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
