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
                <h1>Hello, I'm a Frontend & AI Software Engineer from Brazil</h1>

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
                Since 2017, I've been coding digital solutions. I've impacted millions of users with
                Web Applications, Websites, E-commerce Platforms, PWAs, and Mobile Apps. Playing a
                pivotal role in the efficiency of many companies, I helped increase their revenue.
              </p>

              <p>
                I specialize in Frontend development, focusing on web standards, UX, performance,
                accessibility, security, and analytics. I also work on the Backend with APIs, cloud
                services, and CI/CD pipelines.
              </p>

              <p>
                I currently exploring AI, creating content and open source, and mentoring
                developers.
              </p>
            </div>
          </div>

          <CardsWork />
        </div>
      </section>
    </PageLayout>
  )
}
