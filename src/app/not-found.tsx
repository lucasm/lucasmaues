import Button from '@/components/Button'
import CircleMouse from '@/components/CircleMouse'
import PageWrapper from '@/components/PageWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page not found ',
  description: '404 error page.',
}

export default function PageNotFound() {
  return (
    <PageWrapper>
      <CircleMouse />

      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container">
            <h1>Page not found</h1>

            <p className="description">
              The page you are looking for does not exist. The other pages are
              fully operational, feel free to return safely.
            </p>

            <Button url="/">Back to homepage</Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
