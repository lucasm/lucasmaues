import './global.css'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Gantari } from 'next/font/google'
import { UserContextProvider } from '@/contexts/UserContext'
import { ROUTES } from '@/routes/routes'

const font = Gantari({
  subsets: ['latin'],
  variable: '--font-gantari',
  weight: ['400', '600'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
  ],
}

const HOME = ROUTES.HOME as any

export const metadata: Metadata = {
  title: {
    default: `${HOME.title} — ${HOME.seo}`,
    template: `%s — ${HOME.title}`,
  },
  description: HOME.description,
  applicationName: HOME.title,
  authors: [{ name: 'Lucas Maués de Menezes', url: 'https://lucasm.dev' }],
  creator: 'Lucas Maués de Menezes',
  keywords: [
    'Tech Lead',
    'Senior Frontend Engineer',
    'Frontend Specialist',
    'Developer',
    'React',
    'TypeScript',
    'Brazil',
  ],
  openGraph: {
    title: `${HOME.title} — ${HOME.seo}`,
    description: HOME.description,
    images: [
      {
        url: HOME.image,
        width: 1200,
        height: 630,
        alt: HOME.title,
      },
    ],
    url: 'https://lucasm.dev/',
    type: 'website',
    siteName: 'lucasm.dev',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${HOME.title} — ${HOME.seo}`,
    description: HOME.description,
    images: [HOME.image],
    creator: '@lucasmezs',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '64x64', type: 'image/x-icon' },
      { url: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: HOME.title,
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isProduction: boolean =
    process.env.NEXT_PUBLIC_ENV_LUCASMDEV === 'production'

  return (
    <html lang="en" className={font.className}>
      <head>
        {isProduction && (
          <>
            <Script
              strategy="afterInteractive"
              src={
                'https://www.googletagmanager.com/gtag/js?id=' +
                process.env.NEXT_PUBLIC_ANALYTICS_G
              }
            />
            <Script
              id="GOOGLE-ANALYTICS"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_G}');
              `,
              }}
            />
            <Script
              id="MICROSOFT-CLARITY"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_ANALYTICS_MS}");
              `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <UserContextProvider>{children}</UserContextProvider>
      </body>
    </html>
  )
}
