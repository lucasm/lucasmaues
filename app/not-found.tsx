import Button from '@/components/Button'
import CircleMouse from '@/components/CircleMouse'
import PageWrapper from '@/components/PageWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: '404 error page.',
}

export default function PageNotFound() {
  return (
    <PageWrapper>
      <CircleMouse />

      <section className="fullscreen">
        <div className="fullscreen-container">
          <h1>Page Not Found</h1>

          <p className="description">
            "Getting lost is also a path." — Clarice Lispector
          </p>

          <Button url="/">Back to homepage</Button>
        </div>
      </section>
    </PageWrapper>
  )
}
