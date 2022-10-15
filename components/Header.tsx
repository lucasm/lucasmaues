import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import IconArrowLink from './IconArrowLink'

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
        <Link href="/">
          <a id="logo" aria-label="homepage" accessKey="1">
            <figure>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <polygon
                  className="svg"
                  points="415.08 127.31 336.35 286.19 256.55 127.31 159.71 127.31 159.71 300.75 94.84 300.75 94.84 51.19 0.01 51.19 0.01 383.94 159.71 383.94 159.71 383.96 254.54 383.96 254.54 325.05 302.1 418.46 369.61 418.46 417.17 325.05 417.17 460.06 512 460.06 512 127.31 415.08 127.31"
                />
              </svg>
            </figure>
            Lucas Menezes
          </a>
        </Link>

        <button
          onClick={handleToggle}
          className={isActive ? 'open' : undefined}
          id="menu"
          type="button">
          Menu<div className="hamburger"></div>
        </button>

        <nav className={isActive ? 'open' : undefined}>
          <ul>
            <li>
              <Link href="/#blog">
                <a onClick={isActive ? handleToggle : undefined}>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/#work">
                <a onClick={isActive ? handleToggle : undefined}>Work</a>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <a onClick={isActive ? handleToggle : undefined}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <a onClick={isActive ? handleToggle : undefined}>Contact</a>
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/sponsors/lucasm"
                target="_blank"
                rel="noopener"
                className="button button-secondary">
                Sponsor
                <IconArrowLink />
              </a>
            </li>
          </ul>
        </nav>
        <div className={isActive ? 'layer layer-active' : 'layer'}></div>
      </div>
    </header>
  )
}
