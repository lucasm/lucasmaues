import PageLayout from '../components/PageLayout'
import Links from '../components/Links'
import BlogPosts from '../components/BlogPosts'
import CardsWork from '../components/CardsWork'
import ProfilePhoto from '../components/ProfilePhoto'
import Button from '../components/Button'
import { ROUTES } from '../routes/routes'

export default function Home() {
  return (
    <PageLayout title="Lucas Menezes" description={ROUTES.HOME.description}>
      <section className="fullscreen" id="home">
        <div className="fullscreen-container">
          <div className="container home">
            <div>
              <ProfilePhoto />

              <div>
                <h1>Hello, I'm a Frontend Software Engineer from Brazil</h1>

                <Links />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="background-y">
        <div className="container">
          <h2 className="subtitle">Blog</h2>

          <BlogPosts />
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="subtitle">About</h2>

          <div className="aboutContainer">
            <div>
              <h3>I build positive impact</h3>

              <Button url={ROUTES.WORK.path}>{ROUTES.WORK.title}</Button>
            </div>

            <div>
              <p>
                Since 2017, I have been creating Web Applications, Websites, E-Commerce Platforms,
                PWAs and Mobile Applications, that impact millions of users. I play a fundamental
                role in the companies I work in, driving significant increases in revenue,
                efficiency and growth.
              </p>

              <p>
                I'm a specialist in Frontend development, focused on web standards, UX, performance,
                accessibility, security, web analytics and observability. I also rock on Backend
                APIs, cloud services, CI/CD pipelines and AI experiments.
              </p>

              <p>
                I love creating content, mentoring new developers, and making open source
                contributions!
              </p>
            </div>
          </div>

          <CardsWork />
        </div>
      </section>
    </PageLayout>
  )
}
