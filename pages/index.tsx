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
            <h2>I'm a growth coder</h2>

            <p>
              Since 2015 I've been coding digital products. Web apps, websites, e-commerce, PWAs and
              mobile apps that have helped organizations of all sizes, establish a polished online
              presence, achieve results and grow their businesses.
            </p>

            <p>
              I specialize in front-end development of reactive and component-based UIs with a
              strong focus on UX, performance, accessibility, progressive enhancement, security, web
              standards and data analytics. Adjacent back-end with API and database integrations,
              containers, cloud services and CI/CD.
            </p>

            <p>
              I'm the founder of{' '}
              <a href="https://findto.app" target="_blank" rel="noopener">
                Findto - AI decentralized search
              </a>{' '}
              because I believe on the power of open web. I also create tech content and contribute
              with open source programming docs to support devs community.
            </p>

            <p>
              I am a lifelong learner, born in the Amazon region of Brazil, who loves to travel and
              live new experiences. I highly value communication, innovation and respect.
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
