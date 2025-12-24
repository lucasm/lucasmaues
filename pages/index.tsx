import PageLayout from '../components/PageLayout'
import Links from '../components/Links'
import BlogPosts from '../components/BlogPosts'
import CardsWorkFeatured from '../components/CardsWorkFeatured'
import ProfilePhoto from '../components/ProfilePhoto'
import Button from '../components/Button'
import { ROUTES } from '../routes/routes'
import { IconMore } from '../components/Svgs'

export default function Home() {
  return (
    <PageLayout title={ROUTES.HOME.title} description={ROUTES.HOME.description}>
      <section className="fullscreen" id="home">
        <div className="fullscreen-container">
          <div className="container home">
            <div>
              <ProfilePhoto />

              <div>
                <h1>
                  Tech Lead & Specialist Frontend Software Engineer based in
                  Brazil
                </h1>
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

              <Button url={ROUTES.WORK.path}>
                <>
                  {ROUTES.WORK.title}
                  <IconMore />
                </>
              </Button>
            </div>

            <div>
              <p>
                Hello, I'm Lucas Maués de Menezes, a Tech Lead and Frontend
                Software Specialist based in Brazil.
              </p>

              <p>
                My work impacts millions of users every day and supports
                millions of transactions daily in BRL. Throughout my career,
                I’ve consistently helped drive revenue growth at every company
                I’ve worked with — something I’m genuinely proud of.
              </p>

              <p>
                Since 2017, I’ve been building high-impact web applications,
                mission-critical e-commerce platforms, and more recently,
                AI-driven experiences. As a leader and specialist, I focus on
                delivering high-quality user experiences while promoting robust,
                scalable software engineering practices within my teams.
              </p>

              <p>
                I’m deeply passionate about learning and sharing. My core
                philosophy is simplicity. Welcome!
              </p>
            </div>
          </div>

          <CardsWorkFeatured />
        </div>
      </section>
    </PageLayout>
  )
}
