import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useUser } from '../../contexts/UserContext'
import { IconMoon, IconSun } from '../Svgs'
import { ROUTES } from '../../routes/routes'

export default function Header() {
  const { theme, setTheme } = useUser()
  const [isActive, setActive] = useState<boolean>(false)

  useEffect(() => {
    isActive
      ? document.body.classList.add('removeScroll')
      : document.body.classList.remove('removeScroll')
  }, [isActive])

  const handleToggle = () => {
    setActive(!isActive)
  }

  // system, light, dark
  const toggleTheme = () => {
    if (theme == 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
    }
  }

  const HeaderLinks = [
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
        <Link href="/" id="logo" accessKey="1">
          Lucas Menezes
        </Link>

        <div className="headerButtons">
          <button onClick={toggleTheme} id="theme" translate="no">
            {theme == 'dark' ? <IconMoon /> : <IconSun />}
            {theme === 'dark' ? 'Dark' : 'Light'}
          </button>

          <button
            onClick={handleToggle}
            className={isActive ? 'open' : undefined}
            id="menu"
            type="button"
            aria-label={isActive ? 'Close menu' : 'Open menu'}
            aria-expanded={isActive ? true : false}>
            <div className="hamburger"></div>
            Menu
          </button>
        </div>

        <nav className={isActive ? 'open' : undefined}>
          <ul>
            {HeaderLinks.map((link, index) => (
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
