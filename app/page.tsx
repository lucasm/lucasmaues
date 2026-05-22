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
                Hello, I'm Lucas Maués, a Tech Lead, Senior Software Engineer &
                Frontend Specialist
              </h1>
            </div>

            <p>{ROUTES.WORK.description}</p>
          </div>

          <CardsWorkFeatured />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="specialContainer">
            {/* <h2>{ROUTES.WORK.description?.replaceAll('.', '')}</h2> */}

            <p>
              Since 2017, I have been building web applications, e-commerce
              platforms, mission-critical financial systems, and more recently,
              AI-driven experiences. I take pride in building products that
              reach millions of users daily and power millions in BRL
              transactions every day.
            </p>

            <p>
              As a leader, I empower my teams to deliver refined user
              experiences, scalable engineering practices, and real business
              growth. I'm passionate about deeply understanding business
              problems to solve them simply. Because I believe simplicity is the
              ultimate software sophistication.
            </p>

            <p>
              I'm currently leading teams to build scalable banking platforms
              and products, mentoring developers to grow in their careers, and
              sharing my knowledge through talks, content creation and open
              source initiatives.
            </p>

            <br />

            <Button variant="whiteBorder" url={ROUTES.WORK.path}>
              <>
                Explore my work
                <IconArrowInternal />
              </>
            </Button>

            <div style={{ marginTop: '.5rem' }}>
              <Button variant="black" url={CONTACTS?.patreon?.url} isExternal>
                <>
                  Join on {CONTACTS?.patreon?.icon}
                  {CONTACTS?.patreon?.title}
                </>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
