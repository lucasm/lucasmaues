import Button from '@/components/Button'
import CardsWork from '@/components/CardsWork'
import PageWrapper from '@/components/PageWrapper'
import { CONTACTS } from '@/data/contacts'
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
              <Button url={CONTACTS?.email?.url}>
                <>
                  {CONTACTS?.email?.icon}
                  {CONTACTS?.email?.title}
                </>
              </Button>

              <div style={{ marginTop: '1rem' }} translate="no">
                <Button url={CONTACTS?.whatsapp?.url} isExternal>
                  <>
                    {CONTACTS?.whatsapp?.icon}
                    {CONTACTS?.whatsapp?.title}
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
