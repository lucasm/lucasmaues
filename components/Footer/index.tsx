'use client'

import Link from 'next/link'
import { ROUTES } from '../../routes/routes'
import { IconLucasmdev } from '../Svgs'

function getYear(): number {
  return new Date().getFullYear()
}

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <ul className="footer-links">
          <li>
            <Link href={ROUTES.HOME.path}>
              <IconLucasmdev /> {ROUTES.HOME.title + ' © ' + getYear()}
            </Link>
          </li>
          <li>
            <Link href={ROUTES.STORE.path}>{ROUTES.STORE.title}</Link>
          </li>
          <li>
            <Link href={ROUTES.MENTORSHIP.path}>{ROUTES.MENTORSHIP.title}</Link>
          </li>
          <li>
            <Link href={ROUTES.WORK.path}>{ROUTES.WORK.title}</Link>
          </li>
          <li>
            <Link href={ROUTES.CONTENT.path}>{ROUTES.CONTENT.title}</Link>
          </li>
          <li>
            <Link href={ROUTES.LEGAL.path}>{ROUTES.LEGAL.title}</Link>
          </li>
          <li>
            <a
              href="#"
              role="button"
              className="btn btn-link"
              onClick={(event) => {
                event.preventDefault()
                window.dispatchEvent(new CustomEvent('openCookiesPopup'))
              }}>
              Cookies Preferences
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
