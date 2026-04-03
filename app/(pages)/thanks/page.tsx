import PageWrapper from '@/components/PageWrapper'
import CircleMouse from '@/components/CircleMouse'
import Button from '@/components/Button'
import { ROUTES } from '@/routes/routes'
import { getPageMetadata } from '@/utils/metadata'

export const metadata = getPageMetadata('THANKS')

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
