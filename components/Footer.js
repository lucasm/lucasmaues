// components/Footer.js

import Link from 'next/link'

function getYear() {
  return new Date().getFullYear();
}

const Footer = () => (

  <footer>

    <div className="container">

    <div className="row align-center">
        <div className="justify-content-between horizontal">

          <p>Copyright {getYear()} Lucas Menezes</p>
          <p><Link href="/privacy"><a accessKey="6">Privacy</a></Link></p>

        </div>
      </div>

    </div>
  
  </footer>
);

export default Footer;