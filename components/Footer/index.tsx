import Link from 'next/link'
import { IconLucasmdev } from '../Svgs'

function getYear() {
  return new Date().getFullYear()
}

const Footer = () => (
  <footer>
    <div className="container">
      <div>
        <Link href="/#home">
          Homepage
          <IconLucasmdev />
        </Link>

        <p>
          <span className="company">LUCASM.DEV</span> &copy; {getYear()}
        </p>
      </div>

      <p>
        <Link href="/legal">Privacy & Terms</Link>
      </p>
    </div>
  </footer>
)

export default Footer
