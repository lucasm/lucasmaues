import PageLayout from '../components/PageLayout'
import Links from '../components/Links'
import WorkCards from '../components/WorkCards'
import BlogPosts from '../components/BlogPosts'

export default function Home() {
  return (
    <PageLayout
      title="Lucas Menezes"
      description="Hello, I'm a Software Engineer from Brazil, building Frontend, Web & AI for stand out companies.">
      <section className="fullscreen" id="home">
        <div className="fullscreen-container">
          <div className="container home">
            <figure id="profile">
              <img
                alt="Profile picture of Lucas Menezes"
                src="https://avatars.githubusercontent.com/lucasm"
              />
            </figure>
            <h1>Hello 👋🏻 I'm a Software Engineer from Brazil, developing Frontend, Web & AI.</h1>
          </div>
          <Links />
        </div>
      </section>

      <section id="posts">
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
              <h2>Crafting positive impact with technology, creativity and beyond.</h2>
            </div>

            <div>
              <p>
                Welcome! Since 2017, I've been coding a range of digital solutions, like Web
                Applications, Websites, E-commerce platforms, PWAs, and Mobile Apps. I've played a
                pivotal role in increasing the revenue and enhancing the efficiency of many
                companies.
              </p>

              <p>
                I specialize in Frontend development, with a focus on web standards, UX,
                performance, accessibility, security, and web analytics. I work on the Backend with
                APIs, cloud services, and CI/CD pipelines. And currently experimenting with AI.
              </p>

              <p>
                I love traveling, bodybuilding, mentoring new developers, and creating content /
                open source.
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
        <div className="container">
          <h2 className="subtitle">Contact</h2>

          <div className="aboutContainer">
            <div>
              <h3>Let's talk about your project</h3>
            </div>

            <div>
              <p>Send a concise message. I will get back to you in two business days.</p>

              <a className="button" href="mailto:hello@lucasm.dev">
                hello@lucasm.dev
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
