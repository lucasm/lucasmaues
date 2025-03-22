import Button from '../components/Button'
import PageLayout from '../components/PageLayout'
import CardsWork from '../components/CardsWork'
import { IconEmail, IconWhatsapp } from '../components/Svgs'

export default function PageWork() {
  return (
    <PageLayout
      title="Work"
      description="Portfolio page of Lucas Menezes, a Senior Frontend Developer based in Brazil.">
      <section>
        <div className="page">
          <div className="container miniContainer">
            <h1>Work</h1>

            <p className="description">Building positive impact.</p>
          </div>
        </div>
      </section>

      <section className="background-y">
        <div>
          <CardsWork />
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
              <Button url="mailto:hello@lucasm.dev">
                <>
                  <IconEmail />
                  hello@lucasm.dev
                </>
              </Button>

              <div style={{ marginTop: '1rem' }} translate="no">
                <Button url="https://wa.me/5531997038007" isExternal>
                  <>
                    <IconWhatsapp />
                    WhatsApp
                  </>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
