import { ROUTES } from '@/routes/routes'
import { Metadata } from 'next'

export function getPageMetadata(
  routeKey:
    | 'HOME'
    | 'WORK'
    | 'STORE'
    | 'MENTORSHIP'
    | 'DOMAINS'
    | 'LEGAL'
    | 'CONTACT'
): Metadata {
  const route = ROUTES[routeKey as keyof typeof ROUTES] as any

  if (!route) {
    return {}
  }

  const isHome = routeKey === 'HOME'
  const homeRoute = ROUTES.HOME as any

  return {
    title: isHome ? `${route.title} — ${homeRoute.seo}` : route.title,
    description: route.description || '',
    openGraph: {
      title: isHome
        ? `${route.title} — ${homeRoute.seo}`
        : `${route.title} — ${ROUTES.HOME.title}`,
      description: route.description || '',
      images: route.image
        ? [
            {
              url: route.image,
              width: 1200,
              height: 630,
            },
          ]
        : [],
      url: `https://lucasmaues.com${route.path}`,
      type: 'website',
      ...(isHome && { siteName: 'lucasmaues.com' }),
    },
    twitter: {
      card: 'summary_large_image',
      title: isHome
        ? `${route.title} — ${homeRoute.seo}`
        : `${route.title} — ${ROUTES.HOME.title}`,
      description: route.description || '',
      images: route.image ? [route.image] : [],
    },
  }
}
