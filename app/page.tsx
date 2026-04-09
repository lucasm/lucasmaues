import BlogPosts from '@/components/BlogPosts'
import Button from '@/components/Button'
import CardsWorkFeatured from '@/components/CardsWorkFeatured'
import Links from '@/components/Links'
import PageWrapper from '@/components/PageWrapper'
import ProfilePhoto from '@/components/ProfilePhoto'
import { IconArrowInternal } from '@/components/Svgs'
import { ROUTES } from '@/routes/routes'
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
              also a Tech Lead and Senior Frontend Software Engineer working in
              banking, scaling products, and mentoring developers.
            </h1>

            <Links />
          </div>
        </div>
      </section>

      <section id="content" className="background-y">
        <div className="container">
          <h2 className="subtitle">Latest content</h2>

          <BlogPosts />
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="subtitle">About me</h2>

          <div className="aboutContainer">
            <div>
              <h3>{ROUTES.WORK.description.replaceAll('.', '')}</h3>

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
                pride in building products that reach millions of users and
                power millions in BRL transactions every day.
              </p>

              <p>
                As a leader, I empower teams to deliver refined user
                experiences, scalable engineering practices, and real business
                growth. Complexity is easy; simplicity is hard. It requires a
                deep understanding of business problems to solve them simply.
              </p>

              <p>
                Beyond technology, I’m a human passionate about living,
                continuous learning and sharing knowledge. Welcome!
              </p>
            </div>
          </div>

          <CardsWorkFeatured />
        </div>
      </section>
    </PageWrapper>
  )
}
