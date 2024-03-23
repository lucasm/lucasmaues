import Link from 'next/link'
import { IconHeart } from './Svgs'

function getYear() {
  return new Date().getFullYear()
}

const Footer = () => (
  <footer>
    <div className="container">
      <Link href="/#home">
        Homepage
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path className="svg" d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm6,25H16V13H10V7H22Z" />
        </svg>
      </Link>
      <p>
        Made with
        <IconHeart aria-label="love" />
        by LUCASM.DEV &copy; {getYear()}
      </p>
      <p>
        <Link href="/privacy">Privacy</Link>
      </p>
    </div>
  </footer>
)

export default Footer
