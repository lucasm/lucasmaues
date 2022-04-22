import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'

type Props = {
	title: string
	description: string
	children: ReactNode
}

export default function PageLayout(props: Props) {

  return (
	<>
    <Head>
		<title>{props.title}</title>
		<meta name="description" content={props.description}/>
		<meta name="author" content="Lucas Menezes" />

		<link rel="icon" href="/favicon.ico" sizes="any"/>
		<link rel="icon" href="/icon.svg" type="image/svg+xml"/>
		<link rel="manifest" href="/manifest.json"/>

		<meta name="theme-color" content="#111"/>
		<meta name="mobile-web-app-capable" content="yes"/>
		<meta name="application-name" content="Lucas Menezes"/>
		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<meta name="apple-mobile-web-app-status-bar-style" content="translucent"/>
		<meta name="apple-mobile-web-app-title" content="Lucas Menezes"/>
		<link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#111"/>
		<meta name="msapplication-tap-highlight" content="no"/>

		<meta itemProp="name" content="Lucas Menezes"/>
		<meta itemProp="description" content={props.description}/>
		<meta itemProp="image" content="https://lucasm.dev/images/share.png"/>

		<meta property="og:title" content="Lucas Menezes"/>
		<meta property="og:description" content={props.description}/>
		<meta property="og:image" content="https://lucasm.dev/images/share.png"/>
		<meta property="og:image:width" content="1200"/>
		<meta property="og:image:height" content="630"/>
		<meta property="og:site_name" content="lucasm.dev"/>
		<meta property="og:url" content="https://lucasm.dev/"/>
		<meta property="og:type" content="website"/>
		<meta property="fb:admins" content="100001682681282"/>
		<meta property="fb:app_id" content="526424494397958"/>

		<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:site" content="@lucasmezs"/>
		<meta name="twitter:title" content="Lucas Menezes"/>
		<meta name="twitter:description" content={props.description}/>
		<meta name="twitter:image" content="https://lucasm.dev/images/share.png"></meta>
      
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-8ZFVF9EE79"></script>
		<script
			dangerouslySetInnerHTML={{
			__html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
		
				gtag('config', 'G-8ZFVF9EE79'); 
				`,
			}}
		></script>
		<script
		dangerouslySetInnerHTML={{
					__html: `
			(function(c,l,a,r,i,t,y){
				c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
				t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
				y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
			})(window, document, "clarity", "script", "3j9kmg1bwm");
			`,
		}}
		></script>
    </Head>

    <Header/>

	<main>
		{props.children}
	</main>
      
    <Footer/>

	</>
)}