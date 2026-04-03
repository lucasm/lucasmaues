import PageWrapper from '@/components/PageWrapper'
import CircleMouse from '@/components/CircleMouse'
import Button from '@/components/Button'
import { IconEmail } from '@/components/Svgs'
import { ROUTES } from '@/routes/routes'
import { getPageMetadata } from '@/utils/metadata'

export const metadata = getPageMetadata('DOMAINS')

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
