'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  JSX,
} from 'react'

// Types
interface UserContextType {
  theme: string
  setTheme: (theme: string) => void
}

interface UserContextProviderProps {
  children: ReactNode
}

// create Context for global state
const UserContext = createContext<UserContextType | undefined>(undefined)

// export as Provider
export function UserContextProvider({
  children,
}: Readonly<UserContextProviderProps>): JSX.Element {
  const [theme, setTheme] = useState<string>('light')

  // theme
  useEffect(() => {
    if (theme) {
      const root = document.documentElement

      root.style.setProperty(
        '--color-b',
        theme === 'dark' ? 'var(--color-w)' : 'var(--color-b-dark)'
      )
      root.style.setProperty(
        '--color-w-text',
        theme === 'dark' ? 'var(--color-b-dark)' : 'var(--color-w)'
      )
      root.style.setProperty(
        '--color-background',
        theme === 'dark' ? 'var(--color-b-dark)' : 'var(--color-y-4)'
      )
      root.style.setProperty(
        '--color-translucent',
        theme === 'dark' ? 'rgb(255 255 255 / 5%)' : 'rgb(0 0 0 / 5%)'
      )

      root.style.setProperty('color-scheme', theme)
    }
  }, [theme])

  // set theme on local storage, checking user OS preference
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const storedTheme = window.localStorage.getItem('theme')

    storedTheme
      ? setTheme(storedTheme)
      : setTheme(prefersDarkMode ? 'dark' : 'light')
  }, [])

  return (
    <UserContext.Provider
      value={{
        theme,
        setTheme,
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
