import Button from '../components/Button'
import PageLayout from '../components/PageLayout'
import WorkCards from '../components/WorkCards'

export default function PageWork() {
  return (
    <PageLayout title="Work" description="Work page.">
      <section>
        <div className="page">
          <div className="container miniContainer">
            <h1>Work</h1>

            <p className="description">
              "Simplicity can only be achieved through hard work" — Clarice
              Lispector
            </p>
          </div>
        </div>
      </section>

      <section className="background-y">
        <div className="container">
          <WorkCards />
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="subtitle">Contact</h2>

          <div className="aboutContainer">
            <div>
              <h3>Let's talk about your project</h3>
            </div>

            <div>
              <p>I look forward to hearing you.</p>

              <Button url="mailto:hello@lucasm.dev">hello@lucasm.dev</Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
