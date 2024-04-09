import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useUser } from '../contexts/UserContext'
import { IconMoon, IconSun } from './Svgs'

export default function Header() {
  const [isActive, setActive] = useState<boolean>(false)
  const { theme, setTheme } = useUser()

  useEffect(() => {
    isActive
      ? document.body.classList.add('removeScroll')
      : document.body.classList.remove('removeScroll')
  }, [isActive])

  const handleToggle = () => {
    setActive(!isActive)
  }

  const toggleTheme = () => {
    if (theme == 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
    }
  }

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
            <li>
              <Link href="/#posts" onClick={handleToggle}>
                Posts
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={handleToggle}>
                About
              </Link>
            </li>
            <li>
              <Link href="/#work" onClick={handleToggle}>
                Work
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={handleToggle}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className={isActive ? 'layer layerActive' : 'layer'} onClick={handleToggle}></div>
      </div>
    </header>
  )
}
