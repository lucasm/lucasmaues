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
      description="Software Engineer from Brazil. Coding to grow businesses and help developers.">
      <section className="gradient-y">
        <div className="container home">
          <div>
            <h1>Hi, I code &#38; create</h1>
            <p className="description">
              I'm Lucas Menezes, a Software Engineer from the sunny Brazil, coding to grow
              businesses and creating to help developers.
            </p>

            <Icons />
          </div>

          <div>
            <figure id="profile">
              <Image
                alt="Picture of Lucas Menezes"
                src="https://avatars.githubusercontent.com/lucasm"
                // layout="fill"
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
            <h2>I code to grow biz and create to help devs</h2>

            <p>
              Since 2017 I work with companies and organizations to help launch digital products
              such as websites, web apps, mobile apps and e-commerces, which establish a refined
              online presence, scale and grow their businesses.
            </p>

            <p>
              I specialized on Front-end development of reactive, responsive and progressive user
              interfaces with strong focus on user experience (UX), performance, accessibility,
              security, web standards and analytics. Adjacent Back-end with API integrations,
              databases, CI/CD and cloud deploy.
            </p>

            <p>
              I also create free Content about programming and Open Source projects to help
              beginners developers and advocate for the open web standards.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="gradient-x">
        <div className="container">
          <div className="contactContainer">
            <div>
              <h2 className="subtitle">Get in touch</h2>

              <p>
                If you want to discuss your project or work together, send an email to{' '}
                <span>
                  <a href="mailto:hello@lucasm.dev?subject=Hello">hello@lucasm.dev</a>
                </span>
              </p>
            </div>

            <div>
              <h2 className="subtitle">Community</h2>

              <p>Sponsor my free dev content and open source projects and get benefits!</p>

              <a
                href="https://github.com/sponsors/lucasm"
                target="_blank"
                rel="noopener"
                className="button button-secondary"
                style={{ fontSize: '1.1rem' }}>
                Donate $1
                <IconArrowLink />
              </a>

              {/* <a
                href="https://dev.to/lucasm"
                target="_blank"
                rel="noopener"
                className="button button-secondary">
                Dev Blog
                <IconArrowLink />
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
