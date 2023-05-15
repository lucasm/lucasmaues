import PageLayout from '../components/PageLayout'
import Image from 'next/image'
import Icons from '../components/Icons'
import Cards from '../components/Cards'
import Blog from '../components/Blog'

export default function Home() {
  return (
    <PageLayout
      title="Lucas Menezes — Software Engineer"
      description="Hello, I'm a Software Engineer from Brazil. I code to companies and people to grow.">
      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container home">
            <div>
              <h1>Hello, I'm a Software Engineer from Brazil</h1>
              <p className="description">I code for companies and people to grow.</p>

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
            <h2>I code for growth</h2>

            <p>
              Since 2015 I've been coding digital products: web apps, websites, e-commerces, PWAs
              and mobile apps that have helped organizations of all sizes stand out online presence
              and grow their businesses.
            </p>

            <p>
              I specialize in front-end development with focus on UX, performance, reactivity,
              componentization, progressive enhancement, accessibility, security, web standards and
              analytics. Adjacent back-end with cloud services, APIs, databases, containers and
              CI/CD integrations.
            </p>

            <p>
              I'm the founder of{' '}
              <a href="https://findto.app" target="_blank" rel="noopener">
                Findto - AI decentralized search
              </a>{' '}
              because I believe on the power of open Web community. I also create tech content and
              translate programming docs for devs.
            </p>

            <p>
              I was born in Amazon region of Brazil, I love to travel, face new experiences and I
              highly value innovation and respect for all peoples. Nice to see you =)
            </p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container contactContainer">
          <div>
            <h2>Let's talk</h2>
            <p>Do you want to talk with me? Drop me a line:</p>
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
