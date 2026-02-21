import PageWrapper from '@/components/PageWrapper'
import CircleMouse from '@/components/CircleMouse'
import Button from '@/components/Button'
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
          <div className="container">
            <h1>Page Not Found ✋🏻</h1>

            <p className="description">
              "Getting lost is also a path." — Clarice Lispector
            </p>

            <Button url="/">Back to homepage</Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
