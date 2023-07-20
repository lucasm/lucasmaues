import Link from 'next/link'

function getYear() {
  return new Date().getFullYear()
}

const Footer = () => (
  <footer>
    <div className="container">
      <Link href="/">
        Homepage
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm6,25H16V13H10V7H22Z" />
        </svg>
      </Link>
      <div>
        <p>&copy; {getYear()} LUCASM.DEV</p>
        <p>
          <Link href="/privacy">Privacy</Link>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
