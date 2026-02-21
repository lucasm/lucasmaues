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
            <span className="company">{ROUTES.HOME.title}</span> &copy;{' '}
            {getYear()}
          </p>
        </div>

        <p>
          <Link href="/legal">Privacy & Terms</Link>
        </p>
      </div>
    </footer>
  )
}
