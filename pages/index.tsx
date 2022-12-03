import PageLayout from '../components/PageLayout'
import Image from 'next/image'
import Icons from '../components/Icons'
import Cards from '../components/Cards'
import IconArrowLink from '../components/IconArrowLink'
import Blog from '../components/Blog'

export default function Home() {
  return (
    <PageLayout
      title="Lucas Menezes — Software Engineer"
      description="Software Engineer from Brazil. Creative coding to grow businesses and help developers.">
      <section className="fullscreen gradient-y">
        <div className="fullscreen-container">
          <div className="container home">
            <div>
              <h1>Hi, I code & create</h1>
              <p className="description">
                I'm Lucas Menezes, a Software Engineer from Brazil, coding and creating to grow
                businesses and help developers.
              </p>

              <Icons />
            </div>

            <div>
              <figure id="profile">
                <Image
                  alt="Profile picture of Lucas Menezes"
                  src="https://avatars.githubusercontent.com/lucasm"
                  layout="fill"
                  priority
                  width={220}
                  height={220}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="blog">
        <div className="container">
          <h2 className="subtitle">Recent posts</h2>

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
            <h2>I code and create to grow businesses and help developers</h2>

            <p>
              Since 2017 I code to launch digital products as websites, web apps, mobile apps and
              e-commerces, which establish a refined online presence, scale and grow businesses.
            </p>

            <p>
              I specialized on Front-end development of reactive, responsive and progressive user
              interfaces (UI) with focus on user experience (UX), performance, accessibility,
              security, web standards and analytics. Adjacent Back-end with API integrations,
              databases, containers, CI/CD and cloud deploy.
            </p>

            <p>
              I also create open source projects and free content about programming to help
              beginners developers and advocate for the open web standards.
            </p>

            <p>Nice to see you =)</p>
          </div>
        </div>
      </section>

      <section id="contact" className="gradient-x">
        <div className="container">
          <div className="contactContainer">
            <div>
              <h2 className="subtitle">Say hello</h2>

              <p>
                For work inquiries and questions, email to{' '}
                <span>
                  <a href="mailto:hello@lucasm.dev?subject=Hello">hello@lucasm.dev</a>
                </span>
              </p>
            </div>

            <div>
              <h2 className="subtitle">Open source</h2>

              <p>Become a sponsor of my projects and get benefits!</p>

              <a
                href="https://github.com/sponsors/lucasm"
                target="_blank"
                rel="noopener"
                className="button button-secondary">
                Sponsor
                <IconArrowLink />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
