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
                Since 2017, I have been coding digital products such as web applications, websites,
                e-commerce sites, mobile apps, and PWAs that help organizations refine their online
                presence and grow.
              </p>

              <p>
                I specialize in frontend development with a focus on web standards, UX, performance,
                accessibility, security, tests, and analytics. In the backend, I work with cloud
                services, CI/CD, APIs, and database integrations.
              </p>

              <p>
                I'm a very active person. Currently, I creating and translating technical content
                for developers community, and traveling a lot! I am also founder of{' '}
                <a href="https://findto.app/?utm_source=lucasm.dev" target="_blank" rel="noopener">
                  Findto
                </a>
                , an open source project.
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
              I love working with creative people. Send an email about your project, and I will get
              back to you as soon as possible.
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
