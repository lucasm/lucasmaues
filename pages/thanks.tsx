import PageLayout from '../components/PageLayout'
import CircleMouse from '../components/CircleMouse'
import Link from 'next/link'

export default function PageThanks() {
  return (
    <PageLayout title="Thanks | Lucas Menezes" description="Thanks page.">
      <CircleMouse />
      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container">
            <h1>Thank you! ✌🏻</h1>

            <p className="description">
              "Simplicity can only be achieved through hard work" — Clarice Lispector
            </p>

            <Link href="/" className="button">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
