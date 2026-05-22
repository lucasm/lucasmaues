import Header from './Header'
import Footer from './Footer'
import { JSX, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function PageWrapper({
  children,
}: Readonly<Props>): JSX.Element {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
