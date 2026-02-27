import PageWrapper from '@/components/PageWrapper'
import Links from '@/components/Links'
import BlogPosts from '@/components/BlogPosts'
import CardsWorkFeatured from '@/components/CardsWorkFeatured'
import ProfilePhoto from '@/components/ProfilePhoto'
import Button from '@/components/Button'
import { ROUTES } from '@/routes/routes'
import { IconArrowInternal } from '@/components/Svgs'
import { Metadata } from 'next'
import { JSX } from 'react'

export const metadata: Metadata = {
  title: `${ROUTES.HOME.title} | ${ROUTES.HOME.seo}`,
  description: ROUTES.HOME.description,
  openGraph: {
    title: `${ROUTES.HOME.title} | ${ROUTES.HOME.seo}`,
    description: ROUTES.HOME.description,
    images: [
      {
        url: ROUTES.HOME.image,
        width: 1200,
        height: 630,
      },
    ],
    url: 'https://lucasm.dev/',
    type: 'website',
    siteName: 'lucasm.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${ROUTES.HOME.title} | ${ROUTES.HOME.seo}`,
    description: ROUTES.HOME.description,
    images: [ROUTES.HOME.image],
  },
}

export default function PageHome(): JSX.Element {
  return (
    <PageWrapper>
      <section className="fullscreen" id="home">
        <div className="fullscreen-container">
          <div className="container home">
            <ProfilePhoto />
            <h1>Hello, I'm a {ROUTES.HOME.seo}, from Brazil.</h1>

            <Links />
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
                Since 2017, I’ve been crafting web applications, e-commerce
                platforms, and more recently, AI-driven experiences. I take
                pride in delivering mission-critical products that reach
                millions of users and power high-volume in BRL transactions
                daily.
              </p>
              <p>
                As a leader, I empower teams to deliver refined user
                experiences, scalable software engineering practices, and real
                business growth. I’m passionate about continuous learning and
                sharing knowledge.
              </p>

              <p>
                My core philosophy is: complexity is easy; simplicity is hard!
              </p>
              <p>
                -<i> Lucas Maués</i>
              </p>
            </div>
          </div>

          <CardsWorkFeatured />
        </div>
      </section>
    </PageWrapper>
  )
}
