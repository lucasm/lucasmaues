import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'

type Props = {
  title: string
  image?: string
  description: string
  children: ReactNode
}

export default function PageLayout(props: Props) {
  const title =
    props.title === 'Lucas Menezes'
      ? 'Lucas Menezes | Frontend & AI Developer'
      : props.title + ' | Lucas Menezes'
  const image = props.image || 'https://lucasm.dev/share.png'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={props.description} />
        <meta name="author" content="Lucas Menezes" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#111" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Lucas Menezes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="translucent" />
        <meta name="apple-mobile-web-app-title" content="Lucas Menezes" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#111" />
        <meta name="msapplication-tap-highlight" content="no" />

        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={props.description} />
        <meta itemProp="image" content={image} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="lucasm.dev" />
        <meta property="og:url" content="https://lucasm.dev/" />
        <meta property="og:type" content="website" />
        <meta property="fb:admins" content="100001682681282" />
        <meta property="fb:app_id" content="526424494397958" />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={image}></meta>
        <meta name="twitter:site" content="@lucasmezs" />
      </Head>

      <Header />

      <main>{props.children}</main>

      <Footer />
    </>
  )
}
