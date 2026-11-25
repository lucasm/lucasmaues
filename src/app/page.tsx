import Button from '@/components/Button'
import CardsWorkFeatured from '@/components/CardsWorkFeatured'
import PageWrapper from '@/components/PageWrapper'
import ProfilePhoto from '@/components/ProfilePhoto'
import { IconArrowInternal } from '@/components/Svgs'
import { CONTACTS } from '@/data/contacts'
import { ROUTES } from '@/routes/routes'
import { getPageMetadata } from '@/utils/metadata'

export const metadata = getPageMetadata('HOME')

export default function PageHome() {
  return (
    <PageWrapper>
      <section id="about">
        <div className="container">
          <div className="home">
            <div>
              <ProfilePhoto />
              <h1>
                Hello, I'm Lucas Maués — a Brazilian Founder, Tech Lead, and
                Senior Frontend & AI Engineer specializing in banking platforms
                and products.
              </h1>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
                flexWrap: 'wrap',
                margin: '2rem 0',
              }}>
              <Button variant="black" url={ROUTES.WORK.path}>
                <>
                  My work
                  <IconArrowInternal />
                </>
              </Button>
              <Button variant="whiteBorder" url={ROUTES.MENTORSHIP.path}>
                <>
                  Mentoria {CONTACTS?.patreon?.icon}
                  {CONTACTS?.patreon?.title}
                </>
              </Button>
            </div>

            {/* <p>{ROUTES.WORK.description}</p> */}
          </div>

          <CardsWorkFeatured />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="specialContainer">
            <h2>About me</h2>

            <p>
              As a Tech Lead and Founder, I empower teams to deliver
              high-performing products that drive measurable business growth. I
              take pride in building products that reach millions of users daily
              and power millions in BRL transactions every day.
            </p>

            <p>
              Since 2017, I have been building web applications, e-commerce
              platforms, mission-critical financial systems, legacy
              modernization, and since 2023, AI-driven development and
              experiences. My approach centers on deep business understanding,
              crisp communication, accessibility, security, quality,
              architecture, and pragmatic engineering — eliminating unnecessary
              complexity to build software that lasts.
            </p>

            <p>
              I'm currently leading teams to build scalable AI banking platforms
              and products, mentoring developers to grow in their careers, and
              sharing my knowledge through talks, social media and open source
              initiatives.
            </p>

            <p>Let's make!</p>

            <br />
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
