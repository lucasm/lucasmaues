import PageLayout from '../components/PageLayout'
import CircleMouse from '../components/CircleMouse'
import Link from 'next/link'

export default function Page404() {
  return (
    <PageLayout title="Page Not Found" description="Error page.">
      <CircleMouse />
      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container">
            <h1>Error 404 ✋🏻</h1>

            <p className="description">
              The page you're looking for can't be found or doesn't exist.
            </p>

            <Link href="/" className="button button-main">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
