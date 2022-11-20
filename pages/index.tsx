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
      description="Software Engineer from Brazil. I code & create to help business and developers grow.">
      <section className="gradient-y">
        <div className="container home">
          <div>
            <h1>Hi, I code & create</h1>
            <p className="description">
              I'm Lucas Menezes, a Software Engineer from Brazil, coding and creating to help
              business and developers grow.
            </p>

            <Icons />
          </div>

          <div>
            <figure id="profile">
              <Image
                alt="Picture of Lucas Menezes"
                src="https://avatars.githubusercontent.com/lucasm"
                layout="fill"
                priority
                width={220}
                height={220}
              />
            </figure>
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
            <h2>I code to grow business and developers with creativity</h2>

            <p>
              Since 2017 I code to help companies and organizations launch digital products such as
              websites, web apps, mobile apps and e-commerces, which establish a refined online
              presence, scale and grow their business.
            </p>

            <p>
              I specialized on Front-end development of reactive, responsive and progressive user
              interfaces with focus on user experience, performance, accessibility, security, web
              standards and analytics. Adjacent Back-end with API integrations, databases, CI/CD and
              cloud deploy.
            </p>

            <p>
              I also create open source projects and free content about programming to help
              beginners developers and advocate for the open web standards.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="gradient-x">
        <div className="container">
          <div className="contactContainer">
            <div>
              <h2 className="subtitle">Let's talk</h2>

              <p>
                If you want to work together, email to{' '}
                <span>
                  <a href="mailto:hello@lucasm.dev?subject=Hello">hello@lucasm.dev</a>
                </span>
              </p>
            </div>

            <div>
              <h2 className="subtitle">Open source</h2>

              <p>Sponsor my free projects and get benefits!</p>

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
