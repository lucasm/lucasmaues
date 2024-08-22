import { createContext, useContext, useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

// create Context for global state
const UserContext = createContext<any>({})

// export as Provider
export function UserContextProvider({ children }) {
  const { locale } = useRouter()
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
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    const storedTheme = window.localStorage.getItem('theme')

    storedTheme ? setTheme(storedTheme) : setTheme(prefersDarkMode ? 'dark' : 'light')
  }, [])

  return (
    <UserContext.Provider
      value={{
        theme,
        setTheme,
        locale,
      }}>
      {children}
    </UserContext.Provider>
  )
}

// export as Hook function
export function useUser() {
  return useContext(UserContext)
}
