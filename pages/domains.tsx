import PageLayout from '../components/PageLayout'
import CircleMouse from '../components/CircleMouse'
import Button from '../components/Button'
import { IconEmail } from '../components/Svgs'

export default function PageDomains() {
  return (
    <PageLayout title="Domains Sales" description="Domains sales page.">
      <CircleMouse />

      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container">
            <h1>Domains Sales 🤝🏻</h1>

            <p className="description">
              If you is interested in buying the domain thats redirected you to
              this page, please contact me by email:
            </p>

            <Button url="mailto:domains@lucasm.dev">
              <>
                <IconEmail />
                domains@lucasm.dev
              </>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
