'use client'
import { useCookiesConsent } from '@/contexts/CookiesConsentContext'
import { useEffect, useRef } from 'react'
import styles from './CookiesPopup.module.css'

const ANIMATION_DURATION = 350 // ms — synced with CSS slideDownFadeOut

const CookiesPopup = () => {
  const { isAccepted, isHydrated, accept, reject } = useCookiesConsent()
  const popupRef = useRef<HTMLDivElement>(null)
  const isHidingRef = useRef(false)

  // Reset hiding flag when popup is reopened
  useEffect(() => {
    if (isAccepted === null) {
      isHidingRef.current = false
      if (popupRef.current) {
        popupRef.current.classList.remove(styles.slideDown)
        popupRef.current.classList.add(styles.slideUp)
        popupRef.current.style.pointerEvents = 'auto'
      }
    }
  }, [isAccepted])

  if (!isHydrated) return null
  if (isAccepted !== null) return null

  const handleClose = (action: () => void) => {
    if (isHidingRef.current) return
    isHidingRef.current = true
    if (popupRef.current) {
      popupRef.current.style.pointerEvents = 'none'
      popupRef.current.classList.add(styles.slideDown)
      popupRef.current.classList.remove(styles.slideUp)
    }
    const timer = setTimeout(() => {
      action()
    }, ANIMATION_DURATION)
    return () => clearTimeout(timer)
  }

  return (
    <div
      data-testid="cookies-popup"
      ref={popupRef}
      className={`${styles.cookiesPopup} ${styles.slideUp}`}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie Consent">
      <p className={styles.message}>
        This website uses cookies. Learn more in our{' '}
        <a href="/legal" className={styles.link}>
          Privacy Policy
        </a>
        .
      </p>
      <div className={styles.buttonGroup}>
        <button
          data-testid="accept-button"
          type="button"
          className={`${styles.btn} ${styles.btnAccept}`}
          onClick={() => handleClose(accept)}>
          Accept
        </button>
        <button
          data-testid="reject-button"
          type="button"
          className={`${styles.btn} ${styles.btnReject}`}
          onClick={() => handleClose(reject)}>
          Reject
        </button>
      </div>
    </div>
  )
}

export default CookiesPopup
