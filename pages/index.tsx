import PageLayout from '../components/PageLayout'
import Image from 'next/image'
import Icons from '../components/Icons'
import WorkCards from '../components/WorkCards'
import BlogPosts from '../components/BlogPosts'

export default function Home() {
  return (
    <PageLayout
      title="Lucas Menezes — Software Engineer"
      description="Hello, I'm a Software Engineer from Brazil. I code to companies and people to grow.">
      <section className="fullscreen">
        <div className="fullscreen-container">
          <div className="container home">
            <div>
              <h1>Hello, I’m a Software Engineer from Brazil</h1>
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

      <section id="posts">
        <div className="container">
          <h2 className="subtitle">Latest posts</h2>

          <BlogPosts />
        </div>
      </section>

      <section id="work">
        <div className="container">
          <h2 className="subtitle">Selected work</h2>

          <WorkCards />
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="subtitle">About me</h2>

          <div className="specialContainer">
            <h2>I code for growth</h2>

            <p>
              I have been coding digital products since 2015. Web applications, websites,
              e-commerces, PWAs, and mobile apps. I help organizations to refine their online
              presence and grow businesses.
            </p>

            <p>
              I specialize in Front-end development with main focus on web standards, UX,
              performance, accessibility, security, tests and analytics. Adjacent Back-end with
              cloud services, CI/CD, databases and APIs integrations. I also create technical
              content for developers and translate MDN Web Docs.
            </p>

            <p>
              I'm recently founded{' '}
              <a href="https://findto.app" target="_blank" rel="noopener">
                Findto - AI decentralized search
              </a>{' '}
              a free and open source project.
            </p>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container contactContainer">
          <div>
            <h2>Let’s talk</h2>x
            <p>To talk about your project, drop me a line, put all details but be concise =)</p>
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
