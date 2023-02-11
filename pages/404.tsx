import PageLayout from '../components/PageLayout'
import { useEffect, useRef } from 'react'
import CircleMouse from '../components/CircleMouse'
import Link from 'next/link'

export default function Custom404() {
  const background = useRef(null)

  useEffect(() => {
    let gif = [
      '//c.tenor.com/yAtN8iFS2OcAAAAd/oh-wow-the-office.gif',
      '//c.tenor.com/A-usPJNu8_AAAAAd/yes-right.gif',
      '//c.tenor.com/EuCsUQhyZtgAAAAd/stanley-hudson-the-office.gif',
    ]

    background.current.style.backgroundImage =
      'url(' + gif[Math.floor(Math.random() * gif.length)] + ')'
  })

  return (
    <PageLayout title="Not Found — Lucas Menezes" description="Error page.">
      <section className="fullscreen">
        <CircleMouse />
        <div className="fullscreen-container">
          <div className="container">
            <figure className="gif" ref={background} id="background"></figure>

            <h1>Not Found</h1>

            <p className="description">The page you're looking for can't be found.</p>

            <Link href="/" className="button button-main">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
