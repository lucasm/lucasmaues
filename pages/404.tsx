import PageLayout from '../components/PageLayout'
import CircleMouse from '../components/CircleMouse'
import Link from 'next/link'

export default function Custom404() {
  return (
    <PageLayout title="Error | Lucas Menezes" description="Error page.">
      <CircleMouse />
      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container">
            <h1>Ooops...</h1>

            <p className="description">The page you're looking for can't be found.</p>

            <Link href="/" className="button button-main">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
