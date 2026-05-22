'use client'

import Button from '@/components/Button'
import { IconMoon, IconSun, IconSystem } from '@/components/Svgs'
import { useUser } from '../../contexts/UserContext'

export default function ButtonTheme() {
  const { theme, setTheme } = useUser()

  const toggleTheme = (): void => {
    try {
      if (theme === 'system') {
        setTheme('light')
      } else if (theme === 'light') {
        setTheme('dark')
      } else {
        setTheme('system')
      }
    } catch (error) {
      console.error('Error toggling theme:', error)
    }
  }

  const getThemeLabel = (): string => {
    if (theme === 'system') return 'System'
    return theme === 'dark' ? 'Dark' : 'Light'
  }

  const getThemeIcon = () => {
    if (theme === 'system') return <IconSystem />
    return theme === 'dark' ? <IconMoon /> : <IconSun />
  }

  return (
    <Button variant="blackBorder" size="small" onClick={toggleTheme}>
      {getThemeIcon()}
      Theme: {getThemeLabel()}
    </Button>
  )
}
