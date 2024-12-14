import PageLayout from '../components/PageLayout'
import CircleMouse from '../components/CircleMouse'
import Button from '../components/Button'

export default function Page404() {
  return (
    <PageLayout title="Page Not Found" description="404 error page.">
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
    </PageLayout>
  )
}
