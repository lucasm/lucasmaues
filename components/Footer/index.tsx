import Link from 'next/link'
import { IconLucasmdev } from '../Svgs'
import { ROUTES } from '../../routes/routes'
import { JSX } from 'react'

function getYear(): number {
  return new Date().getFullYear()
}

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="container">
        <div>
          <Link href="/#home">
            Homepage
            <IconLucasmdev />
          </Link>

          <p>
            <span className="company">
              <Link href="/">{ROUTES.HOME.title}</Link>
            </span>{' '}
            &copy; {getYear()}
          </p>
        </div>

        <p>
          <Link href="/legal">{ROUTES.LEGAL.title}</Link>
        </p>
      </div>
    </footer>
  )
}
