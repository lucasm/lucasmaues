import PageWrapper from '@/components/PageWrapper'
import Links from '@/components/Links'
import BlogPosts from '@/components/BlogPosts'
import CardsWorkFeatured from '@/components/CardsWorkFeatured'
import ProfilePhoto from '@/components/ProfilePhoto'
import Button from '@/components/Button'
import { ROUTES } from '@/routes/routes'
import { IconArrowInternal } from '@/components/Svgs'
import { getPageMetadata } from '@/utils/metadata'

export const metadata = getPageMetadata('HOME')

export default function PageHome() {
  return (
    <PageWrapper>
      <section className="fullscreen" id="home">
        <div className="fullscreen-container">
          <div className="container home">
            <ProfilePhoto />
            <h1>
              Hello, I'm Lucas Maués, a Brazilian passionate about living! I'm
              also a Tech Lead and Senior Frontend Software Engineer, working on
              banking, scaling products and developers.
            </h1>

            <Links />
          </div>
        </div>
      </section>

      <section id="posts" className="background-y">
        <div className="container">
          <h2 className="subtitle">{ROUTES.CONTENT.title}</h2>

          <BlogPosts />
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="subtitle">Work</h2>

          <div className="aboutContainer">
            <div>
              <h3>Building high-impact solutions since 2017</h3>

              <Button url={ROUTES.WORK.path}>
                <>
                  {ROUTES.WORK.title}
                  <IconArrowInternal />
                </>
              </Button>
            </div>

            <div>
              <p>
                Since 2017, I’ve been crafting web applications, e-commerce
                platforms, and more recently, AI-driven experiences. I take
                pride in building products that reach millions of users daily
                and power millions in BRL transactions daily.
              </p>
              <p>
                As a leader, I empower teams to deliver refined user
                experiences, scalable software engineering practices, and real
                business growth. I’m passionate about living, continuous
                learning and sharing knowledge.
              </p>

              <p>
                Welcome to my portfolio. And remember: complexity is easy,
                simplicity is hard!
              </p>
            </div>
          </div>

          <CardsWorkFeatured />
        </div>
      </section>
    </PageWrapper>
  )
}
