import Button from '@/components/Button'
import CircleMouse from '@/components/CircleMouse'
import PageWrapper from '@/components/PageWrapper'
import { CONTACTS } from '@/data/contacts'

import { ROUTES } from '@/routes/routes'
import { getPageMetadata } from '@/utils/metadata'

export const metadata = getPageMetadata('CONTACT')

export default function PageContact() {
  return (
    <PageWrapper>
      <CircleMouse />
      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container">
            <h1>{ROUTES.CONTACT.title}</h1>

            <p className="description">
              Let's talk about yur project or just say hi.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: '1rem',
              }}>
              <Button url={CONTACTS?.email?.url}>
                <>
                  {CONTACTS?.email?.icon}
                  {CONTACTS?.email?.title}
                </>
              </Button>

              <Button url={CONTACTS?.whatsapp?.url} isExternal>
                <>
                  {CONTACTS?.whatsapp?.icon}
                  {CONTACTS?.whatsapp?.title}
                </>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
