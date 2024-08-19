import { useState } from 'react'
import Link from 'next/link'
import {
  IconCodepen,
  IconDev,
  IconGithub,
  IconX,
  IconLinkedin,
  IconYoutube,
  IconSpotify,
  IconBluesky,
  IconMastodon,
  IconLetterboxd,
  IconDiscord,
  IconInstagram,
  IconWhatsapp,
  IconMore,
  IconLess,
  IconThreads,
} from './Svgs'
import { ROUTES } from '../routes/routes'
import PrefetchImages from './store/PrefetchImages'

interface ILinks {
  url: string
  icon?: JSX.Element
  text: string
  internalPage?: boolean
  active: boolean
  fullText?: boolean
}

const Links: ILinks[] = [
  {
    url: 'https://x.com/lucasmezs',
    icon: <IconX />,
    text: 'X (Twitter)',
    active: true,
  },
  {
    url: 'https://github.com/lucasm',
    icon: <IconGithub />,
    text: 'GitHub',
    active: true,
  },
  {
    url: 'https://dev.to/lucasm',
    icon: <IconDev />,
    text: 'DEV',
    active: true,
  },
  {
    url: 'https://codepen.io/lucasm',
    icon: <IconCodepen />,
    text: 'CodePen',
    active: true,
  },
  {
    url: 'https://linkedin.com/in/lucasmezs',
    icon: <IconLinkedin />,
    text: 'LinkedIn',
    active: true,
  },
  {
    url: 'https://wa.me/5531997038007',
    icon: <IconWhatsapp />,
    text: 'WhatsApp',
    active: true,
  },
  {
    url: 'https://instagram.com/lucasmezs',
    icon: <IconInstagram />,
    text: 'Instagram',
    active: true,
  },
  {
    url: 'https://threads.net/@lucasmezs',
    icon: <IconThreads />,
    text: 'Threads',
    active: true,
  },
  {
    url: 'https://lucasme.bsky.social',
    icon: <IconBluesky />,
    text: 'Bluesky',
    active: true,
  },
  {
    url: 'https://discord.com/users/lucasmezs',
    icon: <IconDiscord />,
    text: 'Discord',
    active: false,
  },
  {
    url: 'https://youtube.com/@lucasmdev',
    icon: <IconYoutube />,
    text: 'YouTube',
    active: false,
  },
  {
    url: 'https://open.spotify.com/user/lucasmauess',
    icon: <IconSpotify />,
    text: 'Spotify',
    active: false,
  },
  {
    url: 'https://letterboxd.com/lucasmezs',
    icon: <IconLetterboxd />,
    text: 'Letterboxd',
    active: false,
  },
  {
    url: 'https://mastodon.social/@lucasmezs',
    icon: <IconMastodon />,
    text: 'Mastodon',
    active: false,
  },
  {
    url: ROUTES.BLOG.path,
    text: ROUTES.BLOG.title,
    active: true,
    internalPage: true,
    fullText: true,
  },
  {
    url: ROUTES.STORE.path,
    text: ROUTES.STORE.title,
    active: true,
    internalPage: true,
    fullText: true,
  },
  {
    url: ROUTES.MENTORSHIP.path,
    text: ROUTES.MENTORSHIP.title,
    active: false,
    fullText: true,
    internalPage: true,
  },
]

export default function ComponentLinks() {
  const [showMore, setShowMore] = useState(false)
  const [prefetchEnabled, setPrefetchEnabled] = useState(false)

  const handleToggle = () => {
    setShowMore((prev) => !prev)
  }
  const handleMouseEnterStore = () => {
    setPrefetchEnabled(true)
  }

  const fullTextLinks = Links.filter((link) => link.fullText)
  const otherLinks = Links.filter((link) => !link.fullText)
  const limitOfLinks = 5
  const visibleOtherLinks = showMore ? otherLinks : otherLinks.slice(0, limitOfLinks)

  return (
    <div>
      <PrefetchImages enabled={prefetchEnabled} />
      <ul className="links">
        {fullTextLinks.map((link, index) => (
          <li key={index} className="full-text">
            <Link
              href={link.url}
              target={link.internalPage ? '_self' : '_blank'}
              rel={link.internalPage ? 'prefetch' : 'noopener'}
              title={link.text}
              onMouseEnter={link.text === ROUTES.STORE.title ? handleMouseEnterStore : undefined}>
              {link.icon}
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="links" style={{ marginTop: '2rem' }}>
        {visibleOtherLinks.map(
          (link, index) =>
            //is active?
            link.active && (
              <li key={index}>
                <Link
                  href={link.url}
                  target={link.internalPage ? '_self' : '_blank'}
                  rel={link.internalPage ? 'prefetch' : 'noopener'}
                  title={link.text}>
                  {link.icon}
                  {link.text}
                </Link>
              </li>
            )
        )}
        {otherLinks.length > limitOfLinks && (
          <li>
            <button
              onClick={handleToggle}
              aria-expanded={showMore ? 'true' : 'false'}
              aria-label={showMore ? 'Show less' : 'Show more'}>
              {showMore ? <IconLess /> : <IconMore />}
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}
