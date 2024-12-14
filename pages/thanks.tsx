import PageLayout from '../components/PageLayout'
import CircleMouse from '../components/CircleMouse'
import Button from '../components/Button'

export default function PageThanks() {
  return (
    <PageLayout title="Thanks" description="Thanks page.">
      <CircleMouse />
      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container">
            <h1>Thanks! ✌🏻</h1>

            <p className="description">
              "What we truly are is what the impossible creates in us." —
              Clarice Lispector
            </p>

            <Button url="/">Back to homepage</Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
