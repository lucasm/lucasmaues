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
                <h1>{ROUTES.HOME.seo}</h1>
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
                Hello, I’m Lucas Maués de Menezes, a Tech Lead, Senior Software
                Engineer & Frontend Specialist based in Brazil.
              </p>

              <p>
                I take great pride in delivering work that impacts millions of
                users and facilitates high-volume BRL transactions daily.
                Throughout my career, I’ve consistently helped drive revenue
                growth for every company I’ve partnered with.
              </p>

              <p>
                Since 2017, I’ve been building high-impact web applications,
                mission-critical e-commerce platforms, and more recently,
                AI-driven experiences. As a leader, I empower my teams to
                deliver exceptional user experiences while maintaining robust,
                scalable software engineering practices.
              </p>

              <p>
                I’m deeply passionate about learning and sharing knowledge. My
                core philosophy is simple: Simplicity. Welcome!
              </p>
            </div>
          </div>

          <CardsWorkFeatured />
        </div>
      </section>
    </PageLayout>
  )
}
