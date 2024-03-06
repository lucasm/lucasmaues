import PageLayout from '../components/PageLayout'
import Links from '../components/Links'
import WorkCards from '../components/WorkCards'
import BlogPosts from '../components/BlogPosts'

export default function Home() {
  return (
    <PageLayout
      title="Lucas Menezes — Frontend Software Engineer"
      description="Hello, I'm a Frontend Software Engineer from Brazil. Coding positive impact digital solutions.">
      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container home">
            <figure id="profile">
              <img
                alt="Profile picture of Lucas Menezes"
                src="https://avatars.githubusercontent.com/lucasm"
              />
            </figure>
            <h1>Hello 👋🏻 I'm a Frontend Software Engineer from Brazil</h1>
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
              <h2>Building Solutions with Technology, Creativity & Passion</h2>
            </div>

            <div>
              <p>
                Welcome! Since 2017, I've been immersed on coding, channeling creativity and
                technology into a range of digital solutions. From Web Applications to PWAs,
                Websites, E-commerce platforms, and Mobile Apps, I've played a pivotal role in
                enhancing the efficiency, evolution, and scalability of many companies.
              </p>

              <p>
                Specializing in Frontend development, I have expertise on adherence to Web
                standards, performance, accessibility, UX, security, and analytics. Also setting up
                Backend, APIs integrations, cloud services, and CI/CD pipelines. I love travels,
                mentor new developers, create technical content, and open source initiatives!
              </p>

              <p>Let's make! 🤘🏻</p>
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
              Let's Work Together
            </h2>
            <p>Send a message via email, describing your project or idea concisely.</p>
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
