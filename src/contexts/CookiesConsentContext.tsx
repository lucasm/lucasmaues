'use client'
import { usePathname } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'

type ConsentState = boolean | null // null = not decided yet

interface CookiesConsentContextValue {
  isAccepted: ConsentState
  isHydrated: boolean
  openPopup: () => void
  accept: () => void
  reject: () => void
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    clarity?: (...args: unknown[]) => void
  }
}

const LOCALSTORAGE_KEY = 'isCookiesAccepted'
const CONSENT_RETRY_INTERVAL = 250
const CONSENT_RETRY_ATTEMPTS = 20

const CookiesConsentContext = createContext<CookiesConsentContextValue | null>(
  null
)

export const CookiesConsentContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const pathname = usePathname()
  const [isAccepted, setIsAccepted] = useState<ConsentState>(null)
  const [isHydrated, setIsHydrated] = useState(false)

  // Hydrate from localStorage on client only
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCALSTORAGE_KEY)
      setIsAccepted(saved ? JSON.parse(saved) : null)
    } catch {
      setIsAccepted(null)
    } finally {
      setIsHydrated(true)
    }
  }, [])

  // Keep the cookie popup visible across page navigation until the user makes a decision.
  useEffect(() => {
    if (!isHydrated) return
    const saved = localStorage.getItem(LOCALSTORAGE_KEY)
    if (saved === null && isAccepted !== null) {
      setIsAccepted(null)
    }
  }, [pathname, isHydrated, isAccepted])

  // --- Consent helpers (Google Consent Mode v2 + Clarity ConsentV2) ---
  const applyGrantedToGoogle = () => {
    window.gtag?.('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    })
  }

  const applyGrantedToClarity = () => {
    window.clarity?.('consentv2', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    })
  }

  const applyDeniedToGoogle = () => {
    window.gtag?.('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    })
  }

  const applyDeniedToClarity = () => {
    window.clarity?.('consentv2', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
    })
  }

  useEffect(() => {
    if (!isHydrated || isAccepted === null) return

    let isCancelled = false
    let attempts = 0
    let googleApplied = false
    let clarityApplied = false

    const syncConsent = () => {
      if (isCancelled) return

      if (!googleApplied && typeof window.gtag === 'function') {
        if (isAccepted) {
          applyGrantedToGoogle()
        } else {
          applyDeniedToGoogle()
        }
        googleApplied = true
      }

      if (!clarityApplied && typeof window.clarity === 'function') {
        if (isAccepted) {
          applyGrantedToClarity()
        } else {
          applyDeniedToClarity()
        }
        clarityApplied = true
      }

      if (googleApplied && clarityApplied) return
      if (attempts >= CONSENT_RETRY_ATTEMPTS) return

      attempts += 1
      window.setTimeout(syncConsent, CONSENT_RETRY_INTERVAL)
    }

    syncConsent()

    return () => {
      isCancelled = true
    }
  }, [isAccepted, isHydrated])

  const accept = () => {
    setIsAccepted(true)
    try {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(true))
    } catch {
      // Ignore write errors (e.g., private mode)
    }
  }

  const reject = () => {
    setIsAccepted(false)
    try {
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(false))
    } catch {
      // Ignore write errors (e.g., private mode)
    }
  }

  const openPopup = () => setIsAccepted(null)

  useEffect(() => {
    const handleOpenCookiesPopup = () => {
      openPopup()
    }

    window.addEventListener('openCookiesPopup', handleOpenCookiesPopup)

    return () => {
      window.removeEventListener('openCookiesPopup', handleOpenCookiesPopup)
    }
  }, [])

  return (
    <CookiesConsentContext.Provider
      value={{ isAccepted, isHydrated, openPopup, accept, reject }}>
      {children}
    </CookiesConsentContext.Provider>
  )
}

export const useCookiesConsent = () => {
  const ctx = useContext(CookiesConsentContext)
  if (!ctx)
    throw new Error(
      'useCookiesConsent must be used within CookiesConsentContextProvider'
    )
  return ctx
}
