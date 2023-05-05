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
          <h2 className="subtitle">Latest content</h2>

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
            <h2>I code to help people and businesses grow</h2>

            <p>
              I've been creating digital products since 2017, for organizations of all sizes. Web
              apps, websites, e-commerces and mobile apps that helped them establish a refined
              online presence and grow their business.
            </p>

            <p>
              I specialize in front-end development of reactive, responsive and componentized UIs
              with focus on UX, performance, accessibility, progressive enhancement, security, web
              standards and analytics. Adjacent backend with cloud services, APIs and databases
              integrations, CI/CD and containers.
            </p>

            <p>
              I am also building{' '}
              <a href="https://findto.app" target="_blank" rel="noopener">
                Findto - AI decentralized search
              </a>
              , contributing with open source docs of programming and creating free content to
              support the developers community and advocate for the open web.
            </p>

            <p>Nice to see you =)</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container contactContainer">
          <div>
            <h2>Let's talk</h2>
            <p>For contact or to talk about your project, drop me a line:</p>
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
