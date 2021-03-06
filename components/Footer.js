// components/Footer.js

import Link from 'next/link'

function getYear() {
  return new Date().getFullYear();
}

  const Footer = () => (

    <footer>

      <div className="container">
        <p>Copyright {getYear()} Lucas Menezes <br/> <Link href="/privacy"><a accessKey="6">Privacy</a></Link></p>
      </div>
		
    </footer>

  );
  
  export default Footer;