'use client'

import {
  IconAbout,
  IconClose,
  IconContent,
  IconMentor,
  IconMenu,
  IconStore,
  IconWork,
} from '@/components/Svgs'
import Link from 'next/link'
import { ReactElement, useState } from 'react'
import { ROUTES } from '../../routes/routes'

import Style from './Header.module.css'

interface HeaderLink {
  url: string
  text: string
  icon?: ReactElement
}

export default function Header() {
  const [isActive, setActive] = useState<boolean>(false)

  const handleToggle = (): void => {
    setActive(!isActive)
  }

  const HeaderLinks: HeaderLink[] = [
    {
      url: ROUTES.POSTS.path,
      text: ROUTES.POSTS.title,
      icon: <IconContent />,
    },
    {
      url: ROUTES.STORE.path,
      text: ROUTES.STORE.title,
      icon: <IconStore />,
    },
    {
      url: ROUTES.MENTORSHIP.path,
      text: ROUTES.MENTORSHIP.title,
      icon: <IconMentor />,
    },
    {
      url: ROUTES.WORK.path,
      text: ROUTES.WORK.title,
      icon: <IconWork />,
    },
    {
      url: '/',
      text: ROUTES.ABOUT.title,
      icon: <IconAbout />,
    },
  ]

  return (
    <header className={Style.header}>
      <div className={`container ${Style.headerContainer}`}>
        <Link href="/" className={Style.logo}>
          {/* {<IconLucasmdev />} */}
          {ROUTES.HOME.title}
        </Link>

        <div className={Style.headerButtons}>
          <button
            onClick={handleToggle}
            className={Style.menuButton}
            type="button"
            aria-label={isActive ? 'Close menu' : 'Open menu'}
            aria-expanded={isActive}>
            {isActive ? <IconClose /> : <IconMenu />}
            Menu
          </button>
        </div>

        <nav className={`${Style.nav} ${isActive ? Style.open : ''}`}>
          <ul>
            {HeaderLinks.map((link: HeaderLink, index: number) => (
              <li key={index}>
                <Link href={link.url}>
                  {link.icon}
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={`${Style.layer} ${isActive ? Style.layerActive : ''}`}
          onClick={handleToggle}></div>
      </div>
    </header>
  )
}
