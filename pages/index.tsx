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
    <PageLayout title="Lucas Menezes" description={ROUTES.HOME.description}>
      <section className="fullscreen" id="home">
        <div className="fullscreen-container">
          <div className="container home">
            <div>
              <ProfilePhoto />

              <div>
                <h1>Hello, I'm a Frontend Software Engineer.</h1>
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
                Hello, I'm Lucas Menezes, a Senior Frontend Software Engineer
                from Brazil.
              </p>

              <p>
                My work positively impact millions of users/day and millions
                transactions/day in BRL currency. I have driven revenue growth
                at every company I've worked for. I'm very proud of this!
              </p>

              <p>
                Since 2017, I've been building Web applications, E-commerce
                platforms, and recently, AI experiments. As a Frontend
                specialist, I'm helping my team deliver high-quality UX and
                implementing robust software engineering practices.
              </p>

              <p>
                I'm passionate about learning and sharing. I've been creating
                many things on the road. Welcome!
              </p>
            </div>
          </div>

          <CardsWorkFeatured />
        </div>
      </section>
    </PageLayout>
  )
}
