import Button from '@/components/Button'
import CardsWork from '@/components/CardsWork'
import PageHeader from '@/components/PageHeader'
import PageWrapper from '@/components/PageWrapper'
import { CONTACTS } from '@/data/contacts'
import { ROUTES } from '@/routes/routes'
import { getPageMetadata } from '@/utils/metadata'

export const metadata = getPageMetadata('WORK')

export default function PageWork() {
  return (
    <PageWrapper>
      <section>
        <div className="container">
          <PageHeader
            title={ROUTES.WORK.title}
            description={ROUTES.WORK.description}
          />

          <CardsWork />
        </div>
      </section>

      <section>
        <div className="container">
          {/* <h2 className="subtitle">Contact</h2> */}

          <div className="aboutContainer">
            <div>
              <h2>Let's talk about your project</h2>
            </div>

            <div
              translate="no"
              style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
              <Button
                variant="black"
                url={CONTACTS?.whatsapp?.url}
                isExternal
                fullWidth>
                <>
                  {CONTACTS?.whatsapp?.icon}
                  {CONTACTS?.whatsapp?.title}
                </>
              </Button>

              <Button
                variant="black"
                url={'mailto:' + CONTACTS?.email?.url}
                fullWidth>
                <>
                  {CONTACTS?.email?.icon}
                  {CONTACTS?.email?.title}
                </>
              </Button>

              <Button
                variant="black"
                url={CONTACTS?.linkedin?.url}
                isExternal
                fullWidth>
                <>
                  {CONTACTS?.linkedin?.icon}
                  {CONTACTS?.linkedin?.title}
                </>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
