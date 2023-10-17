import PageLayout from '../components/PageLayout'
import CircleMouse from '../components/CircleMouse'
import Link from 'next/link'

export default function Thanks() {
  return (
    <PageLayout title="Thanks — Lucas Menezes" description="Thanks page.">
      <section className="fullscreen">
        <CircleMouse />
        <div className="fullscreen-container">
          <div className="container">
            <h1>Thanks!</h1>

            <p className="description">I just want to say thank you =)</p>

            <Link href="/" className="button">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
