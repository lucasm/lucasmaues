'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ROUTES } from '@/routes/routes'

const HOME = ROUTES.HOME as any

function mapPathToTitle(pathname: string): string {
  const routeMap: Record<string, keyof typeof ROUTES> = {
    '/work': 'WORK',
    '/store': 'STORE',
    '/mentor': 'MENTORSHIP',
    '/domains': 'DOMAINS',
    '/legal': 'LEGAL',
    '/thanks': 'THANKS',
  }

  const routeKey = routeMap[pathname]
  if (!routeKey) return `${HOME.title} — ${HOME.seo}`

  const route = ROUTES[routeKey] as any
  return route?.title
    ? `${route.title} — ${HOME.title}`
    : `${HOME.title} — ${HOME.seo}`
}

export function TitleUpdater() {
  const pathname = usePathname()

  useEffect(() => {
    const newTitle = mapPathToTitle(pathname)
    document.title = newTitle
  }, [pathname])

  return null
}
