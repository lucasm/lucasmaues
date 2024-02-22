import PageLayout from '../components/PageLayout'
import Links from '../components/Links'
import WorkCards from '../components/WorkCards'
import BlogPosts from '../components/BlogPosts'

export default function Home() {
  return (
    <PageLayout
      title="Lucas Menezes — Senior Software Developer"
      description="Hello, I'm a Senior Software Developer from Brazil. Coding positive impact digital solutions.">
      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container home">
            <figure id="profile">
              <img
                alt="Profile picture of Lucas Menezes"
                src="https://avatars.githubusercontent.com/lucasm"
              />
            </figure>
            <h1>Hello 👋🏻 I'm a Senior Software Developer from Brazil</h1>
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
              <h2>Crafting Impactful Digital Solutions with Creativity & Technology</h2>
            </div>

            <div>
              <p>
                Welcome to my digital home! Since 2017, I've been immersed in the world of coding,
                channeling creativity and technology into a diverse range of digital solutions. From
                Web Applications to PWAs, Websites, E-commerce platforms, and Mobile Apps, I've
                played a pivotal role in enhancing the evolution, efficiency, and scalability of
                various enterprises.
              </p>

              <p>
                Specializing in Frontend development, I prioritize performance, accessibility, UX,
                security, analytics, and adherence to Web standards. On the Backend, I thrive on
                engaging with API integrations, cloud services, and CI/CD pipelines. Beyond coding,
                I enjoys travels, creating technical content, and mentoring developers.
                Additionally, I support some open-source initiatives.
              </p>

              <p>Let's build!</p>
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
            <p>
              Send via email a concise message describing your project or idea. I will get back to
              you within two business days.
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
