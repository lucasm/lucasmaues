'use client'

import Link from 'next/link'
import { JSX, ReactElement, useState } from 'react'
import { CONTACTS_LIST } from '../../data/contacts'
import { ROUTES } from '../../routes/routes'
import PrefetchImages from '../store/PrefetchImages'
import { IconContent, IconLess, IconMentor, IconMore, IconStore } from '../Svgs'
import Styles from './Links.module.css'

interface ILinks {
  url: string
  icon?: ReactElement
  title: string
  internalPage?: boolean
  active: boolean
  onlyText?: boolean
}

const socialIds = new Set([
  'youtube',
  'x',
  'bluesky',
  'linkedin',
  'github',
  'devto',
  'codepen',
  'instagram',
  'whatsapp',
  'threads',
  'discord',
  'spotify',
  'letterboxd',
  'mastodon',
])

const socialLinks: ILinks[] = CONTACTS_LIST.filter((link) =>
  socialIds.has(link.id)
)

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
  {
    url: ROUTES.WORK.path,
    title: ROUTES.WORK.title,
    active: true,
    onlyText: true,
    internalPage: true,
    icon: <IconContent />,
  },
  //   {
  //     url: ROUTES.CONTENT.path,
  //     title: ROUTES.CONTENT.title,
  //     active: false,
  //     onlyText: true,
  //     internalPage: true,
  //     icon: <IconAbout />,
  //   },
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

  ...socialLinks,
]

const Links = (): JSX.Element => {
  const [showAll, setShowAll] = useState<boolean>(false)
  const [prefetchEnabled, setPrefetchEnabled] = useState<boolean>(false)

  const handleToggle = (): void => {
    setShowAll((prev) => !prev)
  }
  const handleMouseEnterStore = (): void => {
    setPrefetchEnabled(true)
  }

  const textLinks: ILinks[] = linksList.filter((link) => link.onlyText)
  const iconLinks: ILinks[] = linksList.filter((link) => !link.onlyText)
  const limit = 5
  const visibleIconLinks: ILinks[] = showAll
    ? iconLinks
    : iconLinks?.slice(0, limit)

  // mostra o botão "ver mais" baseado no limit
  const showToggleButton = iconLinks?.length > limit

  return (
    <div className={Styles.container}>
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
