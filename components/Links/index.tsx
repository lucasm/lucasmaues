import { useState } from 'react'
import Styles from './Links.module.css'
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
  IconStore,
  IconMentor,
  IconWork,
  //   IconFindto,
  //   IconCheckTest,
  //   IconTalito,
  IconContent,
} from '../Svgs'
import { ROUTES } from '../../routes/routes'
import PrefetchImages from '../store/PrefetchImages'

interface ILinks {
  url: string
  icon?: JSX.Element
  title: string
  internalPage?: boolean
  active: boolean
  onlyText?: boolean
}

const linksList: ILinks[] = [
  {
    url: ROUTES.STORE.path,
    title: ROUTES.STORE.title,
    active: true,
    onlyText: true,
    internalPage: true,
    icon: <IconStore />,
  },
  {
    url: ROUTES.MENTORSHIP.path,
    title: ROUTES.MENTORSHIP.title,
    active: true,
    onlyText: true,
    internalPage: true,
    icon: <IconMentor />,
  },
  //   {
  //     url: 'https://findto.app/pt-BR/search/job?utm_source=lucasm.dev',
  //     title: 'Findto - Busca de Empregos',
  //     active: false,
  //     onlyText: true,
  //     icon: IconFindto,
  //   },
  //   {
  //     url: 'https://checktest.dev/?utm_source=lucasm.dev',
  //     title: 'Checktest - Teste seu App',
  //     active: false,
  //     onlyText: true,
  //     icon: IconCheckTest,
  //   },
  //   {
  //     url: 'https://talito.com.br/?utm_source=lucasm.dev',
  //     title: 'Talito - IA para Finanças',
  //     active: false,
  //     onlyText: true,
  //     icon: IconTalito,
  //   },
  {
    url: ROUTES.BLOG.path,
    title: ROUTES.BLOG.title,
    active: false,
    onlyText: true,
    internalPage: true,
    icon: <IconContent />,
  },
  {
    url: '#about',
    title: 'Portfólio',
    active: true,
    onlyText: true,
    internalPage: true,
    icon: <IconWork />,
  },
  {
    url: 'https://x.com/lucasmezs',
    icon: <IconX />,
    title: 'X',
    active: true,
  },
  {
    url: 'https://github.com/lucasm',
    icon: <IconGithub />,
    title: 'GitHub',
    active: true,
  },
  {
    url: 'https://youtube.com/@lucasmdev',
    icon: <IconYoutube />,
    title: 'YouTube',
    active: true,
  },
  {
    url: 'https://linkedin.com/in/lucasmezs',
    icon: <IconLinkedin />,
    title: 'LinkedIn',
    active: true,
  },
  {
    url: 'https://dev.to/lucasm',
    icon: <IconDev />,
    title: 'DEV Community',
    active: true,
  },
  {
    url: 'https://codepen.io/lucasm',
    icon: <IconCodepen />,
    title: 'CodePen',
    active: true,
  },
  {
    url: 'https://bsky.app/profile/lucasm.dev',
    icon: <IconBluesky />,
    title: 'Bluesky',
    active: true,
  },
  {
    url: 'https://instagram.com/lucasmezs',
    icon: <IconInstagram />,
    title: 'Instagram',
    active: false,
  },
  {
    url: 'https://wa.me/5531997038007',
    icon: <IconWhatsapp />,
    title: 'WhatsApp',
    active: true,
  },
  {
    url: 'https://threads.net/@lucasmezs',
    icon: <IconThreads />,
    title: 'Threads',
    active: false,
  },
  {
    url: 'https://discord.com/users/lucasm.dev',
    icon: <IconDiscord />,
    title: 'Discord',
    active: false,
  },
  {
    url: 'https://open.spotify.com/user/lucasmauess',
    icon: <IconSpotify />,
    title: 'Spotify',
    active: false,
  },
  {
    url: 'https://letterboxd.com/lucasmezs',
    icon: <IconLetterboxd />,
    title: 'Letterboxd',
    active: false,
  },
  {
    url: 'https://mastodon.social/@lucasmezs',
    icon: <IconMastodon />,
    title: 'Mastodon',
    active: false,
  },
]

const Links = () => {
  const [showAll, setShowAll] = useState(false)
  const [prefetchEnabled, setPrefetchEnabled] = useState(false)

  const handleToggle = () => {
    setShowAll((prev) => !prev)
  }
  const handleMouseEnterStore = () => {
    setPrefetchEnabled(true)
  }

  const textLinks = linksList.filter((link) => link.onlyText)
  const iconLinks = linksList.filter((link) => !link.onlyText)
  const limit = 5
  const visibleIconLinks = showAll ? iconLinks : iconLinks.slice(0, limit)

  // só mostra o botão se tiver mais de 7 links
  const showToggleButton = iconLinks.length > limit

  return (
    <div>
      <PrefetchImages enabled={prefetchEnabled} />

      <ul className={`${Styles.links} ${Styles.containerText}`}>
        {textLinks?.map((link, index) => (
          <li key={index} className={Styles.text}>
            <Link
              href={link.url}
              target={link.internalPage ? '_self' : '_blank'}
              rel={link.internalPage ? 'prefetch' : 'noopener'}
              title={link.title}
              onMouseEnter={
                link.title === ROUTES.STORE.title
                  ? handleMouseEnterStore
                  : undefined
              }>
              {link.icon}
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <ul className={Styles.links}>
        {visibleIconLinks?.map(
          (link, index) =>
            // only active links
            link.active && (
              <li key={index}>
                <Link
                  href={link.url}
                  target={link.internalPage ? '_self' : '_blank'}
                  rel={link.internalPage ? 'prefetch' : 'noopener noreferrer'}
                  title={link.title}>
                  {link.icon}
                  {link.title}
                </Link>
              </li>
            )
        )}

        {showToggleButton && (
          <li>
            <button
              type="button"
              className={Styles.buttonMore}
              onClick={handleToggle}
              aria-expanded={showAll ? 'true' : 'false'}
              aria-label={showAll ? 'Show less' : 'Show more'}>
              {showAll ? <IconLess /> : <IconMore />}
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Links
