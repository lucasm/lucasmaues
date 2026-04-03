import { Metadata } from 'next'
import { ROUTES } from '@/routes/routes'

export function getPageMetadata(
  routeKey:
    | 'HOME'
    | 'WORK'
    | 'STORE'
    | 'MENTORSHIP'
    | 'DOMAINS'
    | 'LEGAL'
    | 'THANKS'
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
      url: `https://lucasm.dev${route.path}`,
      type: 'website',
      ...(isHome && { siteName: 'lucasm.dev' }),
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
