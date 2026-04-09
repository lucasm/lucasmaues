'use client'

import { ROUTES } from '@/routes/routes'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const HOME = ROUTES.HOME as any

function mapPathToTitle(pathname: string): string {
  const routeMap: Record<string, keyof typeof ROUTES> = {
    '/store': 'STORE',
    '/mentor': 'MENTORSHIP',
    '/work': 'WORK',
    '/contact': 'CONTACT',
    '/legal': 'LEGAL',
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
