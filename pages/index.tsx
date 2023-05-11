import PageLayout from '../components/PageLayout'
import Image from 'next/image'
import Icons from '../components/Icons'
import Cards from '../components/Cards'
import Blog from '../components/Blog'

export default function Home() {
  return (
    <PageLayout
      title="Lucas Menezes — Software Engineer"
      description="I'm a Software Engineer from Brazil. Coding to help businesses and people grow.">
      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container home">
            <div>
              <h1>Hello, I'm a Software Engineer from Brazil</h1>
              <p className="description">I code to help businesses and people grow.</p>

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
            <h2>I code to grow people and businesses </h2>

            <p>
              Since 2015 I've been coding digital products. Web apps, websites, e-commerces, PWAs
              and mobile apps that helped organizations of all sizes establish a refined online
              presence and grow their business.
            </p>

            <p>
              I specialize in front-end development of reactive, responsive and component-based UIs
              with focus on UX, performance, accessibility, progressive enhancement, security, web
              standards and data analytics. Adjacent backend with APIs and databases integrations,
              containers, cloud services and CI/CD.
            </p>

            <p>
              I'm building{' '}
              <a href="https://findto.app" target="_blank" rel="noopener">
                Findto - AI decentralized search
              </a>
              , creating content and contributing with open source programming docs to support devs
              community and advocate for the open web.
            </p>

            <p>Make things happen!</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container contactContainer">
          <div>
            <h2>Let's talk</h2>
            <p>Drop me a line for contact, or if you want to talk about your project.</p>
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
