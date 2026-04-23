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
              Hello, I'm Lucas Maués, a Brazilian Tech Lead, Senior Software
              Engineer and Frontend Specialist working on banking, scaling
              products, and leading developers
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
              <h3>{ROUTES.WORK.description}</h3>

              <Button url={ROUTES.WORK.path}>
                <>
                  {ROUTES.WORK.title}
                  <IconArrowInternal />
                </>
              </Button>
            </div>

            <div>
              <p>
                Since 2017, I have been building web applications, e-commerce
                platforms, mission-critical financial systems, and more
                recently, AI-driven experiences. I take pride in building
                products that reach millions of users and power millions in BRL
                transactions every day.
              </p>

              <p>
                As a leader, I empower my teams to deliver refined user
                experiences, scalable engineering practices, and real business
                growth. I'm passionate about deeply understanding business
                problems to solve them simply. Because simplicity is the
                ultimate software sophistication.
              </p>
            </div>
          </div>

          <CardsWorkFeatured />
        </div>
      </section>
    </PageWrapper>
  )
}
