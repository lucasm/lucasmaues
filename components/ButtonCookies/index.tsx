'use client'

import Button from '@/components/Button'
import { IconCookies } from '@/components/Svgs'
import { useCookiesConsent } from '@/contexts/CookiesConsentContext'

export default function ButtonCookies() {
  const { isAccepted, isHydrated, openPopup } = useCookiesConsent()

  const statusLabel = !isHydrated
    ? 'Pending'
    : isAccepted === true
      ? 'On'
      : isAccepted === false
        ? 'Off'
        : 'Not set'

  return (
    <Button variant="blackBorder" size="small" onClick={openPopup}>
      <IconCookies />
      Cookies: {statusLabel}
    </Button>
  )
}
