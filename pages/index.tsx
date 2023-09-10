import PageLayout from '../components/PageLayout'
import Image from 'next/image'
import Icons from '../components/Icons'
import WorkCards from '../components/WorkCards'
import BlogPosts from '../components/BlogPosts'

export default function Home() {
  return (
    <PageLayout
      title="Lucas Menezes — Software Engineer"
      description="Hello, I'm a Software Engineer from Brazil, coding to help companies and people grow.">
      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container home">
            <figure id="profile">
              <Image
                alt="Profile picture of Lucas Menezes"
                src="https://avatars.githubusercontent.com/lucasm"
                priority
                fill={true}
              />
            </figure>
            <h1>
              Hello 👋🏻 I'm a Software Engineer from Brazil, coding to help companies and people
              grow.
            </h1>

            <Icons />
          </div>
        </div>
      </section>

      <section id="blog">
        <div className="container">
          <h2 className="subtitle">Latest posts</h2>

          <BlogPosts />
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="subtitle">About me</h2>

          <div className="aboutContainer">
            <div>
              <h2>I love to code solutions that enable the best of companies and people</h2>
            </div>

            <div>
              <p>
                Since 2017 I have been coding digital products like web applications, websites,
                e-commerces, mobile apps and PWAs thats helps organizations to refine their online
                presence and grow.
              </p>

              <p>
                I specialize in Frontend development with focus on Web standards, UX, performance,
                accessibility, security, tests and analytics. Backend with cloud services, CI/CD,
                APIs and databases integrations.
              </p>

              <p>
                I'm a very active person. I'm currently building the open source project{' '}
                <a href="https://findto.app/?utm_source=lucasm.dev" target="_blank" rel="noopener">
                  Findto
                </a>
                . Writing about technology, speaking and traveling are some of my passions!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="container">
          <h2 className="subtitle">Selected work</h2>

          <WorkCards />
        </div>
      </section>

      <section id="contact">
        <div className="container contactContainer">
          <div>
            <h2>
              {/* 🤝🏻<br></br> */}
              Let's work together
            </h2>
            <p>
              I love working with creative people. Drop me a message about your project and I will
              get back to you as soon as possible.
            </p>
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
