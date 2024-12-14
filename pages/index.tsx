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
                <h1>Hello, I'm a Senior Frontend Engineer from Brazil</h1>

                <Links />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="background-y">
        <div className="container">
          <h2 className="subtitle">{ROUTES.BLOG.title}</h2>

          <BlogPosts />
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="subtitle">About</h2>

          <div className="aboutContainer">
            <div>
              <h3>Building positive impact</h3>

              <Button url={ROUTES.WORK.path}>{ROUTES.WORK.title}</Button>
            </div>

            <div>
              <p>
                Hi, I'm Lucas Menezes, a Senior Frontend Engineer based in Belo
                Horizonte, Brazil.
              </p>
              <p>
                Since 2017, I've been building Web Applications, E-Commerces,
                Websites, Mobile Apps, and now, AI Experiences.
              </p>

              <p>
                My work positively impact millions of users. And drive revenue
                growth and operational efficiency in every company I've
                contributed to. I'm proud of these achievements.
              </p>

              <p>
                As a Frontend specialist, I focus on Web Standards, UX, Tests,
                Performance, Accessibility, Security, PWA, Analytics,
                Observability, APIs, and CI/CD.
              </p>

              <p>
                I'm passionate about new challenges, açaí and open source. Let's
                make!
              </p>
            </div>
          </div>

          <CardsWork />
        </div>
      </section>
    </PageLayout>
  )
}
