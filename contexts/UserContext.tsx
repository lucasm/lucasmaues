'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

type ThemeType = 'system' | 'light' | 'dark'

interface UserContextType {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
  effectiveTheme: 'light' | 'dark'
}

interface UserContextProviderProps {
  children: ReactNode
}

// create Context for global state
const UserContext = createContext<UserContextType | undefined>(undefined)

// export as Provider
export function UserContextProvider({
  children,
}: Readonly<UserContextProviderProps>) {
  const [theme, setThemeState] = useState<ThemeType>('system')
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>(
    'light'
  )

  // Get the effective theme considering system preference
  const getEffectiveTheme = (currentTheme: ThemeType): 'light' | 'dark' => {
    if (currentTheme === 'system') {
      if (typeof window === 'undefined') return 'light'
      const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      return prefersDarkMode ? 'dark' : 'light'
    }
    return currentTheme
  }

  // Apply theme CSS variables
  const applyTheme = (currentTheme: ThemeType): void => {
    const effective = getEffectiveTheme(currentTheme)
    setEffectiveTheme(effective)

    if (typeof window === 'undefined') return

    const root = document.documentElement

    root.style.setProperty(
      '--color-b',
      effective === 'dark' ? 'var(--color-w)' : 'var(--color-b-dark)'
    )
    root.style.setProperty(
      '--color-w-text',
      effective === 'dark' ? 'var(--color-b-dark)' : 'var(--color-w)'
    )
    root.style.setProperty(
      '--color-background',
      effective === 'dark' ? 'var(--color-b-dark)' : 'var(--color-w)'
    )
    root.style.setProperty(
      '--color-translucent',
      effective === 'dark' ? 'rgb(255 255 255 / 5%)' : 'rgb(0 0 0 / 5%)'
    )

    root.style.setProperty('color-scheme', effective)
  }

  // Wrapper para setTheme que persiste no localStorage
  const setTheme = (newTheme: ThemeType): void => {
    setThemeState(newTheme)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', newTheme)
    }
    applyTheme(newTheme)
  }

  // Listen for system theme changes when in 'system' mode
  useEffect(() => {
    if (theme !== 'system' || typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (): void => {
      applyTheme('system')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  // Initialize theme from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return

    const storedTheme = window.localStorage.getItem('theme') as ThemeType | null
    const validThemes: ThemeType[] = ['system', 'light', 'dark']

    const initialTheme =
      storedTheme && validThemes.includes(storedTheme) ? storedTheme : 'system'

    setThemeState(initialTheme)
    applyTheme(initialTheme)
  }, [])

  return (
    <UserContext.Provider
      value={{
        theme,
        setTheme,
        effectiveTheme,
      }}>
      {children}
    </UserContext.Provider>
  )
}

// export as Hook function
export function useUser(): UserContextType {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within UserContextProvider')
  }
  return context
}
