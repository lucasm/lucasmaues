import PageLayout from '../components/PageLayout'
import Links from '../components/Links'
import WorkCards from '../components/WorkCards'
import BlogPosts from '../components/BlogPosts'

export default function Home() {
  return (
    <PageLayout
      title="Lucas Menezes — Software Engineer"
      description="Hello, I'm a Software Engineer from Brazil. Coding positive impact digital solutions.">
      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container home">
            <figure id="profile">
              <img
                alt="Profile picture of Lucas Menezes"
                src="https://avatars.githubusercontent.com/lucasm"
              />
            </figure>
            <h1>Hello 👋🏻 I'm a Software Engineer from Brazil</h1>
            <Links />
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
              <h2>I use creativity and technology to deliver positive impact digital solutions</h2>
            </div>

            <div>
              <p>
                Hello and welcome! I've been coding since 2017, crafting an array of digital
                solutions including Web Applications, PWAs, Websites, E-commerce platforms, and
                Mobile Apps. I have significantly contributed to the evolution, resource
                optimization, and scalability of companies. My primary focus lies in Frontend
                development, with performance, accessibility, UX, security, testing, analytics, and
                strict adherence to Web standards. In Backend development, I engage with cloud
                services, CI/CD, databases and API integrations. I'm a very active person, traveling
                a lot, creating technical content, and mentoring developers. I also support some
                open source projects.
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
              🤝🏻<br></br>
              Let's work together
            </h2>
            <p>
              Send a concise message describing your project. I will get back to you within two
              business days.
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
