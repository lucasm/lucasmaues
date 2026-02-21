'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useUser } from '../../contexts/UserContext'
import { IconMenu, IconSystem, IconMoon, IconSun, IconClose } from '../Svgs'
import { ROUTES } from '../../routes/routes'

// Types
interface HeaderLink {
  url: string
  text: string
}

export default function Header() {
  const { theme, setTheme } = useUser()
  const [isActive, setActive] = useState<boolean>(false)

  useEffect(() => {
    isActive
      ? document.body.classList.add('removeScroll')
      : document.body.classList.remove('removeScroll')
  }, [isActive])

  const handleToggle = (): void => {
    setActive(!isActive)
  }

  const toggleTheme = (): void => {
    try {
      if (theme === 'system') {
        // Se estiver em 'system', muda para light
        setTheme('light')
      } else if (theme === 'light') {
        // Se estiver em 'light', muda para dark
        setTheme('dark')
      } else {
        // Se estiver em 'dark', volta para system
        setTheme('system')
      }
    } catch (error) {
      console.error('Error toggling theme:', error)
    }
  }

  const getThemeLabel = (): string => {
    if (theme === 'system') return 'System'
    return theme === 'dark' ? 'Dark' : 'Light'
  }

  const getThemeIcon = () => {
    if (theme === 'system') return <IconSystem />
    return theme === 'dark' ? <IconMoon /> : <IconSun />
  }

  const HeaderLinks: HeaderLink[] = [
    {
      url: ROUTES.BLOG.path,
      text: ROUTES.BLOG.title,
    },
    {
      url: ROUTES.STORE.path,
      text: ROUTES.STORE.title,
    },
    {
      url: ROUTES.MENTORSHIP.path,
      text: ROUTES.MENTORSHIP.title,
    },
    {
      url: ROUTES.ABOUT.path,
      text: ROUTES.ABOUT.title,
    },
    {
      url: ROUTES.WORK.path,
      text: ROUTES.WORK.title,
    },
    {
      url: ROUTES.CONTACT.path,
      text: ROUTES.CONTACT.title,
    },
  ]

  return (
    <header>
      <div className="container">
        <Link href="/" id="logo">
          {ROUTES.HOME.title}
        </Link>

        <div className="headerButtons">
          <button onClick={toggleTheme} id="theme" translate="no">
            {getThemeIcon()}
            {getThemeLabel()}
          </button>

          <button
            onClick={handleToggle}
            className={isActive ? 'open' : undefined}
            id="menu"
            type="button"
            aria-label={isActive ? 'Close menu' : 'Open menu'}
            aria-expanded={isActive}>
            {isActive ? <IconClose /> : <IconMenu />}
            Menu
          </button>
        </div>

        <nav className={isActive ? 'open' : undefined}>
          <ul>
            {HeaderLinks.map((link: HeaderLink, index: number) => (
              <li key={index}>
                <Link href={link.url} onClick={handleToggle}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={isActive ? 'layer layerActive' : 'layer'}
          onClick={handleToggle}></div>
      </div>
    </header>
  )
}
