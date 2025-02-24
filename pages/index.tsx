import PageLayout from '../components/PageLayout'
import Links from '../components/Links'
import BlogPosts from '../components/BlogPosts'
import CardsWorkFeatured from '../components/CardsWorkFeatured'
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
                <h1>Hello, I'm a Senior Frontend Developer</h1>
                <Links />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="content" className="background-y">
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
                Hello, I'm Lucas Menezes, a Senior Frontend Developer working
                remotely from Brazil.
              </p>

              <p>
                My work positively impact millions of users/day and millions
                transactions/day in BRL currency. I'm proud to have driven
                revenue growth at every company I've worked for.
              </p>

              <p>
                Since 2017, I've been building Web applications, e-commerces
                platforms, and recently, AI experiments. As a Frontend
                specialist, my main focus is on helping my team deliver
                high-quality user experiences and implementing robust software
                engineering practices.
              </p>

              <p>
                I love açaí, travel, new challenges, and open source. Let's
                make!
              </p>
            </div>
          </div>

          <CardsWorkFeatured />
        </div>
      </section>
    </PageLayout>
  )
}
