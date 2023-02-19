import PageLayout from '../components/PageLayout'
import Image from 'next/image'
import Icons from '../components/Icons'
import Cards from '../components/Cards'
import Blog from '../components/Blog'

export default function Home() {
  return (
    <PageLayout
      title="Lucas Menezes — Software Engineer"
      description="I'm a Software Engineer from Brazil. Coding to help business and people grow.">
      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container home">
            <div>
              <h1>Hello, I'm a Software Engineer from Brazil</h1>
              <p className="description">
                I create digital products to help business and people grow.
              </p>

              <Icons />
            </div>

            <div>
              <figure id="profile">
                <Image
                  alt="Profile picture of Lucas Menezes"
                  src="https://avatars.githubusercontent.com/lucasm"
                  priority
                  fill={true}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="blog">
        <div className="container">
          <h2 className="subtitle">Latest posts</h2>

          <Blog />
        </div>
      </section>

      <section id="work">
        <div className="container">
          <h2 className="subtitle">Selected work</h2>

          <Cards />
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="subtitle">About me</h2>

          <div className="specialContainer">
            <h2>I code to help business and people grow</h2>

            <p>
              I've been coding digital products for companies of all sizes since 2017. Web Apps,
              Websites, Mobile Apps, and E-Commerces that establish a refined online presence, scale
              and grow their business.
            </p>

            <p>
              I specialize in front-end development of reactive and responsive user interfaces (UI)
              with strong focus on user experience (UX), performance, accessibility (WCAG),
              progressive enhancement, security, behavior analytics and web standards. Adjacent
              backend with APIs integrations, databases, containers, CI/CD and cloud deployment.
            </p>

            <p>
              I'm the creator of{' '}
              <a href="https://github.com/lucasm/findto" target="_blank" rel="noopener">
                Findto - decentralized search app
              </a>
              , an open source project. I also create free content about programming to help
              developers community and advocate for the open web.
            </p>

            <p>Nice to see you =)</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container contactContainer">
          <div>
            <h2>Let's talk</h2>
            <p>Want to work together? Send an email to:</p>
          </div>

          <div>
            <p>
              <a href="mailto:hello@lucasm.dev">hello@lucasm.dev</a>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
