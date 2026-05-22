import Button from '@/components/Button'
import CircleMouse from '@/components/CircleMouse'
import PageWrapper from '@/components/PageWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found ',
  description: '404 error page.',
}

export default function PageNotFound() {
  return (
    <PageWrapper>
      <CircleMouse />

      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container">
            <h1>Ooops.... The page you’re looking for can’t be found.</h1>

            <p className="description">
              You don't need to do anything. Just go ahead.
            </p>

            <Button url="/">Back to homepage</Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
