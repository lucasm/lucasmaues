import Link from 'next/link'

function getYear() {
  return new Date().getFullYear()
}

const Footer = () => (
  <footer>
    <div className="container">
      <p>&copy; {getYear()} LUCASM.DEV</p>
      <p>
        <Link href="/privacy" accessKey="6">
          Privacy
        </Link>
      </p>
    </div>
  </footer>
)

export default Footer
