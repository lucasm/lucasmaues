import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isActive, setActive] = useState<boolean>(false)

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('removeScroll')
    } else {
      document.body.classList.remove('removeScroll')
    }
  }, [isActive])

  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <header>
      <div className="container">
        <Link href="/" id="logo" aria-label="homepage" accessKey="1">
          Lucas Menezes
        </Link>

        <button
          onClick={handleToggle}
          className={isActive ? 'open' : undefined}
          id="menu"
          type="button"
          aria-label="Menu"
          aria-expanded={isActive ? true : false}>
          Menu<div className="hamburger"></div>
        </button>

        <nav className={isActive ? 'open' : undefined}>
          <ul>
            <li>
              <Link href="/#blog" onClick={handleToggle}>
                🗒️ Blog
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={handleToggle}>
                👨🏼‍💻 About
              </Link>
            </li>
            <li>
              <Link href="/#work" onClick={handleToggle}>
                📂 Work
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={handleToggle}>
                📞 Contact
              </Link>
            </li>
            {/* <li>
              <a href="https://github.com/sponsors/lucasm" target="_blank" rel="noopener">
                Open Source
              </a>
            </li> */}
          </ul>
        </nav>

        <div className={isActive ? 'layer layerActive' : 'layer'} onClick={handleToggle}></div>
      </div>
    </header>
  )
}
